const getTheTitles = function(books) {
    let titles = [];
    let i = 0;
    books.forEach(book => {
        titles[i] = book.title;
        i++;
    });

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
