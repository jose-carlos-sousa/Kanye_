import React, { useState, useEffect } from 'react';
import QuoteBtn from "./Quote-btn"
import KanyePic from "./KanyePic"
import images from "./images"

function getRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function QuotePage(props) {
  const [quote, setQuote] = useState('');

  // Function to fetch a new quote from the API
  const fetchQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Fetch the initial quote from the API when the component mounts
    fetchQuote();
  }, []);
  const index =getRandomIndex(images)
  console.log(index)
  return (
    <div>
      <KanyePic url={images[index]} />
      <h1 className="mt-5 mb-5 text-center Quotes mx-5" style={{ fontSize: "3rem" }}>
        {quote}
      </h1>
      <QuoteBtn onClick={fetchQuote} />
    </div>
  );
}

export default QuotePage;
