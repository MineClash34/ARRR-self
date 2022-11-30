const jimp = require("jimp");

module.exports = function (img) {
    let found = [];
    for (let x = 0; x <= 120; x++) {
        for (let y = 0; y <= 60; y++) {
            if (jimp.intToRGBA(img.getPixelColor(x, y)).r === 18 && jimp.intToRGBA(img.getPixelColor(x, y)).g === 29 && jimp.intToRGBA(img.getPixelColor(x, y)).b === 172) {
                /* 0 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 13, y + 20) && img.getPixelColor(x, y) === img.getPixelColor(x + 12, y + 19) && img.getPixelColor(x, y) === img.getPixelColor(x, y + 42) && img.getPixelColor(x, y) === img.getPixelColor(x - 13, y + 32) && img.getPixelColor(x, y) === img.getPixelColor(x - 13, y + 25) && img.getPixelColor(x, y) === img.getPixelColor(x - -12, y + 14))  found.includes(0) ? "" : found.push(0);
                /* 1 */ if (img.getPixelColor(x, y) === img.getPixelColor(x + 13, y - 4) && img.getPixelColor(x, y) === img.getPixelColor(x + 13, y + 37) && img.getPixelColor(x, y) === img.getPixelColor(x + 13, y + 5))  found.includes(1) ? "" : found.push(1);
                /* 2 */ if (img.getPixelColor(x, y) === img.getPixelColor(x + 27, y + 30) && img.getPixelColor(x, y) === img.getPixelColor(x + 25, y - 1) && img.getPixelColor(x, y) === img.getPixelColor(x + 11, y + 18))  found.includes(2) ? "" : found.push(2);
                /* 3 */ if (img.getPixelColor(x, y) === img.getPixelColor(x + 24, y + 1) && img.getPixelColor(x, y) === img.getPixelColor(x + 3, y + 22) && img.getPixelColor(x, y) === img.getPixelColor(x + 21, y + 29) && img.getPixelColor(x, y) !== img.getPixelColor(x + 3, y + 5))  found.includes(3) ? "" : found.push(3);
                /* 4 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 23, y + 31) && img.getPixelColor(x, y) === img.getPixelColor(x + 6, y + 31) && img.getPixelColor(x, y) === img.getPixelColor(x - 0, y + 41))  found.includes(4) ? "" : found.push(4);
                /* 5 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 20, y - 0) && img.getPixelColor(x, y) === img.getPixelColor(x - 21, y + 22) && img.getPixelColor(x, y) === img.getPixelColor(x - 19, y + 31) && img.getPixelColor(x, y) === img.getPixelColor(x - 22, y + 14) && img.getPixelColor(x, y) === img.getPixelColor(x + 1, y + 27) && img.getPixelColor(x, y) === img.getPixelColor(x - 9, y + 14))  found.includes(5) ? "" : found.push(5);
                /* 6 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 22, y + 20) && img.getPixelColor(x, y) === img.getPixelColor(x + 3, y + 20) && img.getPixelColor(x, y) === img.getPixelColor(x - 8, y + 41))  found.includes(6) ? "" : found.push(6);
                /* 7 */ if (img.getPixelColor(x, y) === img.getPixelColor(x + 8, y + 41) && img.getPixelColor(x, y) === img.getPixelColor(x + 11, y + 24) && img.getPixelColor(x, y) === img.getPixelColor(x + 27, y - 0))  found.includes(7) ? "" : found.push(7);
                /* 8 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 11, y + 7) && img.getPixelColor(x, y) === img.getPixelColor(x + 1, y + 20) && img.getPixelColor(x, y) === img.getPixelColor(x - 13, y + 31) && img.getPixelColor(x, y) === img.getPixelColor(x + 13, y + 35) && img.getPixelColor(x, y) === img.getPixelColor(x + 12, y + 7) && img.getPixelColor(x, y) === img.getPixelColor(x + 0, y + 42) && img.getPixelColor(x, y) === img.getPixelColor(x - 11, y + 25) && img.getPixelColor(x, y) === img.getPixelColor(x + 11, y + 16) && img.getPixelColor(x, y) === img.getPixelColor(x - -8, y + 26))  found.includes(8) ? "" : found.push(8);
                /* 9 */ if (img.getPixelColor(x, y) === img.getPixelColor(x - 0, y + 27) && img.getPixelColor(x, y) === img.getPixelColor(x + 13, y + 20) && img.getPixelColor(x, y) === img.getPixelColor(x - 13, y + 14))  found.includes(9) ? "" : found.push(9);
            } else continue;
        }
    }
    return found;
}