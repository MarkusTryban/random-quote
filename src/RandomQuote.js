import React, { Component, Fragment } from 'react';

class RandomQuote extends Component {
  render() {
    return (
      <Fragment>
        <div id='wrapper'>
          <div id='quote-box'>
            <div className='quote-text'>
              <i className='fa fa-quote-left'></i>
              <span id='text'></span>
            </div>
            <div className='quote-author'>
              <span id='author'></span>
            </div>
            <div className='buttons'>
              <a
                href='#!'
                className='button'
                id='tweet-quote'
                title='Tweet this quote!'
                target='_blank'
              >
                <i className='fa fa-twitter'></i>
              </a>
              <a href='#!' className='button' id='tumblr-quote' target='_blank'>
                <i className='fa fa-tumblr'></i>
              </a>
              <button className='button' id='new-quote'>
                New quote
              </button>
            </div>
          </div>
          <div className='footer'>
            by <a href='https://github.com/MarkusTryban'>Markus Tryban</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RandomQuote;
