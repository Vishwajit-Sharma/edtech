
import React, { useState, useEffect } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const quotes = [
        "The best way to predict the future is to invent it. - Alan Kay",
        "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it. - Douglas Crockford",
        "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck",
        "React is not a framework, it's a library. - Dan Abramov",
        "The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code. - Guido van Rossum",
        "The most important skill a programmer can learn is to write clean code. - Robert C. Martin",
        "The best error message is the one that never shows up. - Thomas Fuchs"
      ];
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote text-center">
      {quote}
    </div>
  );
}

export default RandomQuote;