
import React, { useState, useEffect } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const quotes = [
        `"The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." - Tim Berners-Lee`,
        `"Good web design is about the character of the content, not the character of the designer." - Jeffrey Zeldman`,
        `"The strength of JavaScript is that you can do anything. The weakness is that you will." - Reg Braithwaite`,
        `"JavaScript is a language with a very simple syntax, yet a very complex semantics." - Douglas Crockford`,
        `"Java is a great language for building scalable, distributed, networked applications." - Jonathan Schwartz`,
        `"Python is the second best language for anything." - Anonymous`,
        `"The web is constantly changing, and front-end development is leading the charge." - Shawn Wildermuth`,
        `"Front-end development is about creating rich, interactive experiences for people browsing the web." - Addy Osmani`,
        `"Back-end development is the foundation that the web is built on." - Matt Stauffer`,
        `"Web design is where aesthetics meets functionality." - Anonymous`,

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