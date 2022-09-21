const blackFridayPrice = (originalPrice: number): number => {
    return originalPrice * 0.7;
}

const defaultPrice = (originalPrice: number): number => {
    return originalPrice * 0.95;
}

const preOderPrice = (originalPrice: number): number => {
    return originalPrice * 0.9;
}


const getPriceStrategies: any = {
    preOder: preOderPrice,
    blackFriday: blackFridayPrice,
    default: defaultPrice
}

const getPrice = ( originalPrice: number, typePromotion: any): number => {
    return getPriceStrategies[typePromotion](originalPrice)
}

console.log(getPrice(200, 'default'));
