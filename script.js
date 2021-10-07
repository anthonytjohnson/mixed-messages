const message = document.querySelector("#message");
const author = document.querySelector("#author");

quotes = [];
const newQuote = (quote, author) => {
  quotes.push({
    quote: quote,
    author: author
  });
}
newQuote('Spread love everywhere you go. Let no one ever come to you without leaving happier.', 'Mother Teresa');
newQuote('When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D. Roosevelt');
newQuote('Always remember that you are absolutely unique. Just like everyone else.', 'Margaret Mead');
newQuote("Don't judge each day by the harvest you reap but by the seeds that you plant.", 'Robert Louis Stevenson');
newQuote('The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt');
newQuote('ell me and I forget. Teach me and I remember. Involve me and I learn.', 'Benjamin Franklin');
newQuote('The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.', 'Helen Keller');
newQuote('It is during our darkest moments that we must focus to see the light.', 'Aristotle');
newQuote('Whoever is happy will make others happy too.', 'Anne Frank');
newQuote('Do not go where the path may lead, go instead where there is no path and leave a trail.', 'Ralph Waldo Emerson');

message.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote;
author.innerText = `- ${quotes[Math.floor(Math.random()*quotes.length)].author}`;
