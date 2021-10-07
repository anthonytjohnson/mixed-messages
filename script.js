// var faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log(randomName);
quotes = [];
const newQuote = (quote, author) => {
  quotes.push({
    quote: quote,
    author: author
  });
}
newQuote('Spread love everywhere you go. Let no one ever come to you without leaving happier.', 'Mother Teresa');

console.log(quotes[0].quote);