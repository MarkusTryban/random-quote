import React, { Component, Fragment } from 'react';

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quoteData: [],
    };
    this.GET_QUOTE = 'https://thesimpsonsquoteapi.glitch.me/quotes';
  }

  getRandomQuote = () => {
    fetch(this.GET_QUOTE)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          quoteData: result,
        });
      });
  };

  getRandomColor = () => {
    const randomLetters = '0123456789A';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += randomLetters[Math.floor(Math.random() * randomLetters.length)];
    }

    return color;
  };

  randomColor = () => {
    const updateStyleColor = document.querySelectorAll('.button');

    Array.from(updateStyleColor).map((button) => {
      return (button.style.backgroundColor = document.body.style.backgroundColor = document.body.style.color = this.getRandomColor());
    });
  };

  render() {
    const { quoteData } = this.state;

    return (
      <Fragment>
        <div id='wrapper'>
          <div id='quote-box'>
            <div className='quote-text'>
              <i className='fa fa-quote-left'></i>
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
                href='#!'
                className='button'
                id='tweet-quote'
                title='Tweet this quote!'
                target='_blank'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='#!'
                className='button'
                id='tumblr-quote'
                title='Post this quote on tumblr!'
                target='_blank'
              >
                <i className='fab fa-tumblr'></i>
              </a>
              <button
                className='button'
                id='new-quote'
                onClick={() => {
                  // this.getRandomQuote();
                  this.randomColor();
                }}
              >
                New Quote
              </button>
            </div>
          </div>
          <div className='footer'>
            by{' '}
            <a href='https://markustryban.com' target='_blank'>
              Markus Tryban
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RandomQuote;
