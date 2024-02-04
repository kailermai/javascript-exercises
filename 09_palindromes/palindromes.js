const palindromes = function (strings) {
    //convert the string into an array
    const arrays = strings.split("")
    //remove punctuations and spaces
    for (let i = 0; i < arrays.length; i++) {
        if (arrays.includes(' ')) {
            arrays.splice(arrays.indexOf(' '), 1);
        }
        else if (arrays.includes('!')) {
            arrays.splice(arrays.indexOf('!'), 1);
        }
        else if (arrays.includes('.')) {
            arrays.splice(arrays.indexOf('.'), 1);
        }
        else if (arrays.includes(',')) {
            arrays.splice(arrays.indexOf(','), 1);
        }
    }

    //Converts all into uppercase
    for (let i = 0; i < arrays.length; i++) {
        arrays[i] = arrays[i].toUpperCase();
    }


    //Midpoint of string
    const midpoint = Math.floor((arrays.length) / 2.0);


    //If string is odd
    if (arrays.length % 2 !== 0) {
        const firstHalf = arrays.slice(0, midpoint);
        const secondHalf = arrays.slice(midpoint + 1);
        secondHalf.reverse();
        for (let i = 0; i < firstHalf.length; i++) {
            if (firstHalf[i] !== secondHalf[i]) {
                return false
            }
        }
        return true;
    }

    //If string is even
    if (arrays.length % 2 === 0) {
        const firstHalf = arrays.slice(0, midpoint);
        const secondHalf = arrays.slice(midpoint);
        secondHalf.reverse();
        for (let i = 0; i < firstHalf.length; i++) {
            if (firstHalf[i] != secondHalf[i]) {
                return false
            }
        }
        return true;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
