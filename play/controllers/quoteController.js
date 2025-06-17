import quotes from '../data/quotes.js';

export const getRandomQuote = (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
};

export const getAllQuotes = (req, res) => {
  res.json(quotes);
};
