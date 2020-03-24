import React, { Component, Fragment } from 'react';

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        content: '',
        title: '',
      },
      hasQuote: false,
    };
    this.GET_QUOTE =
      'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
  }

  getRandomQuote = () => {
    fetch(this.GET_QUOTE)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].content && data[0].title) {
          let { quote } = this.state;
          let quoteData = data[0];
          quote.content = quoteData.content;
          quote.title = quoteData.title;
          this.setState({ quote }, () => {
            if (this.state.hasQuote === false) {
              this.setState({ hasQuote: true });
            }
          });
        } else {
          return console.error('No quote found');
        }
      });
  };

  render() {
    const { hasQuote, quote } = this.state;

    return (
      <Fragment>
        <div id='wrapper'>
          <div id='quote-box'>
            <div className='quote-text'>
              <i className='fa fa-quote-left'></i>
              <span id='text'>
                {hasQuote === true ? JSON.stringify(quote) : 'No quote found'}
              </span>
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
              <button
                className='button'
                id='new-quote'
                onClick={this.getRandomQuote}
              >
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
