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

const messCode = new Map([
    ['100', 'Continue'],
    ['101', 'Switching Protocols'],
    ['102', 'Processing'],
    ['103', 'Early Hints'],
    ['200', 'OK'],
    ['201', 'Created'],
    ['202', 'Accepted'],
    ['203', 'Non-Authoritative Information'],
    ['204', 'No Content'],
    ['default', 'No Code'],
])

const resultMessCode = (code: string ) => {
    return messCode.get(code);
}

// console.log(getPrice(200, 'default'));

console.log(resultMessCode('100'))