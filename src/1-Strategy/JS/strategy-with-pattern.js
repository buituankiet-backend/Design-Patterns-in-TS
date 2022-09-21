//V1
function blackFridayPrice(originalPrice) {
    return originalPrice * 0.7;
}

function defaultPrice(originalPrice) {
    return originalPrice * 0.95;
}

function preOderPrice(originalPrice) {
    return originalPrice * 0.9;
}


// function getPrice(originalPrice, typePromotion) {
//     if (typePromotion === 'BlackFriday'){
//         return blackFridayPrice(originalPrice);
//     }else if(typePromotion === 'preOder') {
//         return preOderPrice(originalPrice);
//     }else {
//         return defaultPrice(originalPrice);
//     }
// }

//v2
const getPriceStrategies = {
    preOder: preOderPrice,
    default: defaultPrice,
    blackFriday: blackFridayPrice,
}

function getPrice(originalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originalPrice);
}

console.log(getPrice(200, 'blackFriday'));
