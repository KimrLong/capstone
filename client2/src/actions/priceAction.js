export const updatePrice  = (price) => {
    
    return {
        type: "UPDATE_TOTAL",
        data: price
    }

};



export const clearPrice  = () => {
    console.log('im in clear price')
    return {
        type: "CLEAR_PRICE",
        
    }

};

//clears the price