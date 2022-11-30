const jimp = require("jimp");

module.exports = function (img) {
    let found = [];
    for (let x = 0; x <= 27; x++) {
        for (let y = 0; y <= 29; y++) {
            /* + */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 15, y + 15) && img.getPixelColor(x, y) === img.getPixelColor(x + 12, y + 15)) found.includes("+") ? "" : found.push("+");
            /* - */ // if (img.getPixelColor(x, y) === img.getPixelColor(x + 13, y - 3) && img.getPixelColor(x, y) !== img.getPixelColor(x + 6, y - 17)) found.includes("-") ? "" : found.push({s: "-", x:x, y:y});
        }
    }
    if (!found.includes("+")) found.push("-")
    return found;
}