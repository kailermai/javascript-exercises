const findTheOldest = function(people) {
    // const someAlive = people.some((person) => {
    //     if (!person.hasOwnProperty('yearOfDeath')) {
    //         return true;
    //     }
    // })


    people.forEach(person => {
        if (person.yearOfDeath){
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            person.age = ((new Date()).getFullYear()) - person.yearOfBirth;
        }
    });
    people.sort((a, b) => a.age > b.age ? 1 : -1);

    return people[2];

};


// Do not edit below this line
module.exports = findTheOldest;
