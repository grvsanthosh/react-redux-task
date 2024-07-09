 export const HandleTotalPrice = (priceVal) => {
    if(priceVal.length > 0) {
        let val = 0;
        for (let i = 0; i < priceVal.length; i++) {
          val += priceVal[i];
        }
        return(val);
    }
    else{
        return -1;
    }  
    };