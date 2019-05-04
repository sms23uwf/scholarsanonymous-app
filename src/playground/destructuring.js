console.log('destructuring');

 const person = {
     name: 'Andrew',
     age: 29,
     location: {
         city: 'Philadelphia',
         temp: 92
     }
 };

 const { name:firstName = 'Anonymous', age } = person;

 console.log(`${firstName} is ${age}.`);

const { city : personCity, temp: temperature } = person.location;

if(personCity && temperature) {
    console.log(`It's ${temperature} in ${personCity}.`)
}

//
// object destructuring
//

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log (publisherName); // Penguin, Self-Published

//
// array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York', zip] = address;  // ordered list, matches on position

console.log(`You are in ${city} ${state} at zip code ${zip}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, smallPrice, mediumPrice, largePrice] = item;

// grab first and third items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}.`);