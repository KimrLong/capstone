import React from "react";
import { Circle } from "./react-konva";
import { SEAT_SIZE } from "./layout";

function getColor(isBooked, isSelected) {
  if (isSelected) {
    return "#cdd422";
  } else if (isBooked) {
    return "lightgrey";
  } else {
    return "#1b728d";
  }
}

const Seat = props => {
  const isBooked = props.data.status === "booked";

  return (
    <Circle
      x={props.x}
      y={props.y}
      radius={SEAT_SIZE / 2}
      fill={getColor(isBooked, props.isSelected)}
      strokeWidth={1}
      onMouseEnter={e => {
        e.target._clearCache();
        props.onHover(props.data.name, props.data.price, e.target.getAbsolutePosition());
        const container = e.target.getStage().container();
        if (isBooked) {
          container.style.cursor = "not-allowed";
        } else {
          container.style.cursor = "pointer";
        }
      }}
      onMouseLeave={e => {
        props.onHover(null);
        const container = e.target.getStage().container();
        container.style.cursor = "";
      }}
      onClick={e => {
        if (isBooked) {
          return;
        }
        if (props.isSelected) {
          props.onDeselect(props.data.name, props.data.price);
        } else {
          props.onSelect(props.data.name, props.data.price);
        }
      }}
      onTap={e => {
        if (isBooked) {
          return;
        }
        if (props.isSelected) {
          props.onDeselect(props.data.name);
        } else {
          props.onSelect(props.data.name);
        }
      }}
    />
  );
};

export default Seat;