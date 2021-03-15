import { useRef, useState, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Stage, Layer } from "./react-konva";
import Section from "./Section";
import SeatPopup from "./SeatPopup";
import * as layout from "./layout";
import {seatPicker} from '../../actions/SeatAction';
import {updatePrice, clearPrice} from '../../actions/priceAction';





const useFetch = url => {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(url)
    fetch(url)
      .then(res => res.json())

      .then(data => {console.log(data)
        setData(data)});

  }, [url]);
  return data;
};
//refer to async await
//check console for price.. and 


const Mainstage = props => {
  const jsonData = useFetch("./solo-data.json");
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [scaleToFit, setScaleToFit] = useState(1);
  const [size, setSize] = useState({
    width: 50,
    height: 50,
    virtualWidth: 50
  });

  const [virtualWidth, setVirtualWidth] = useState(50);

  const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);

  const [popup, setPopup] = useState({});

  const dispatch = useDispatch();

  const seatStuff = useSelector(state => state.selectedSeats.seatIds);

  const [totalPrice, setTotalPrice] = useState(0);






  // calculate available space for drawing
  useEffect(() => {
    const newSize = {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight
    };
    if (newSize.width !== size.width || newSize.height !== size.height) {
      setSize(newSize);
    }
  });

  // calculate initial scale
  useEffect(() => {
    if (!stageRef.current) {
      return;
    }
    const stage = stageRef.current;
    const clientRect = stage.getClientRect({ skipTransform: true });

    const scaleToFit = size.width / clientRect.width;
    setScale(scaleToFit);
    setScaleToFit(scaleToFit);
    setVirtualWidth(clientRect.width);
  }, [jsonData, size]);


  useEffect(() => {
    return ()=>{
      console.log('ok')
      dispatch(clearPrice())
    }

  }, []);

  // togle scale on double clicks or taps
  const toggleScale = useCallback(() => {
    if (scale === 1) {
      setScale(scaleToFit);
    } else {
      setScale(1);
    }
  }, [scale, scaleToFit]);

  let lastSectionPosition = 0;

  const handleHover = useCallback((seat, price, pos) => {
    setPopup({
      seat: seat,
      price: price,
      position: pos
      
    });
  }, []);

  const handleSelect = useCallback(
      (seatId, price) =>{
      const newIds = selectedSeatsIds.concat([seatId]);
      setSelectedSeatsIds(newIds);
      dispatch(updatePrice(price));
      console.log(price);
      dispatch(seatPicker(newIds))
    },
    [selectedSeatsIds],
//set action and pass in price
    
  );

  const handleDeselect = useCallback(
    (seatId, price) => {
      const ids = selectedSeatsIds.slice();
      ids.splice(ids.indexOf(seatId), 1);
      setSelectedSeatsIds(ids);
      dispatch(updatePrice( -price))
      console.log(price);
      console.log(jsonData);  
      dispatch(seatPicker(ids))
    },
    [selectedSeatsIds]
  );

  if (jsonData === null) {
    return <div ref={containerRef}>Loading...</div>;
  }

  const maxSectionWidth = layout.getMaximimSectionWidth(
    jsonData.seats.sections
  );

  return (
    <div
      style={{
        position: "relative",
        width: "55vw",
        height: "75vh"
      }}
      ref={containerRef}
    >
      <Stage
        ref={stageRef}
        width={size.width}
        height={size.height}
        
        dragBoundFunc={pos => {
          pos.x = Math.min(
            size.width / 1,
            Math.max(pos.x, -virtualWidth * scale + size.width / 1)
          );
          pos.y = Math.min(size.height / 2, Math.max(pos.y, -size.height / 1));
          return pos;
        }}
        // onDblTap={toggleScale}
        // onDblClick={toggleScale}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          {jsonData.seats.sections.map((section, index) => {
            const height = layout.getSectionHeight(section);
            const position = lastSectionPosition + layout.SECTIONS_MARGIN;
            lastSectionPosition = position + height;
            const width = layout.getSectionWidth(section);

            const offset = (maxSectionWidth - width) / 2;

            return (
              <Section
                x={offset}
                y={position}
                height={height}
                key={index}
                section={section}
                selectedSeatsIds={selectedSeatsIds}
                onHoverSeat={handleHover}
                onSelectSeat={handleSelect}
                onDeselectSeat={handleDeselect}
              />
            );
          })}
        </Layer>
      </Stage>
      {/* draw popup as html */}
      {popup.seat && (
        <SeatPopup
          position={popup.position}
          seatId={popup.seat}
          seatPrice={popup.price}
          onClose={() => {
            setPopup({ seat: null, price: null });
          }}
        />
      )}
    </div>
  );
};

export default Mainstage;

//useEffect(() => {
//   const updatePosts = async() => {
//     const url = `http://localhost:3001/forum`
//     const response = await fetch(url)
//     const data = await response.json()
//     dispatch(groupPosts(data));
// }
// updatePosts();
// }, [viewPosts])
