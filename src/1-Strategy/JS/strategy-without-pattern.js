 function getPrice(originalPrice, typePromotion = 'default') {

    // Dat truoc
    if (typePromotion === 'preOder') {
        return typePromotion * 0.8;
    }

    //Black Friday
    if (typePromotion === 'blackFriday') {
        return typePromotion * 0.7;
    }

    //default
    if (typePromotion === 'default') {
        return typePromotion;
    }
}