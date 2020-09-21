import React, { useState, useEffect } from 'react';

import './RandomQuote.css';

const RandomQuote = () => {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((result) => {
        setQuoteData(result);
      });
  };

  const randomColor = () => {
    const randomChars = '0123456789A';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    return color;
  };

  const getRandomColor = () => {
    const colorVal = randomColor();
    const updateStyleColor = document.querySelectorAll('.button');

    Array.from(updateStyleColor).map((button) => {
      return (button.style.backgroundColor = document.body.style.backgroundColor = document.body.style.color = colorVal);
    });
  };

  return (
    <>
      <div id='quote-box'>
        <div className='quote-text'>
          <i className='fa fa-quote-left' />
          {quoteData.map((data) => (
            <span id='text' key={data.quote}>
              {data.quote}
            </span>
          ))}
        </div>
        <div className='quote-author'>
          {quoteData.map((data) => (
            <span id='author' key={data.character}>
              - {data.character}
            </span>
          ))}
        </div>
        <div className='buttons'>
          <a
            href='https://twitter.com/intent/tweet'
            className='button'
            id='tweet-quote'
            title='Tweet this quote!'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter' />
          </a>
          <a
            href='https://www.tumblr.com/login'
            className='button'
            id='tumblr-quote'
            title='Post this quote on tumblr!'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-tumblr' />
          </a>
          <button
            className='button'
            id='new-quote'
            onClick={() => {
              getRandomQuote();
              getRandomColor();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className='footer'>
        by{' '}
        <a
          href='https://markustryban.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Markus Tryban
        </a>
      </div>
    </>
  );
};
export default RandomQuote;
