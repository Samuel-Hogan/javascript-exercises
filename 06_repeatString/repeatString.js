const repeatString = function(string, repeat) {
    let text = "";
    for (let i = 0; i < repeat; i++) {
        text += string;
    }
    if (repeat < 0) {
        return "ERROR";
    }else {
        return text;
    }
};

// Do not edit below this line
module.exports = repeatString;
