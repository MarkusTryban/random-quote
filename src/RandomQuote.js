import React, { Component, Fragment } from 'react';

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        content: '',
        title: '',
        link: '',
      },
      hasQuote: false,
    };
    this.GET_QUOTE =
      'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
  }

  getRandomQuote = () => {
    fetch(this.GET_QUOTE)
      .then((res) => res.json())
      .then((result) => {
        if (result[0].content && result[0].title && result[0].link) {
          let { quote } = this.state;
          let quoteData = result[0];
          quote.content = quoteData.content;
          quote.title = quoteData.title;
          quote.link = quoteData.link;
          this.setState({ quote }, () => {
            if (this.state.hasQuote === false) {
              this.setState({ hasQuote: true });
            }
          });
        } else {
          return console.error('No Quote Found');
        }
        // result[Math.floor(Math.random() * result.length)],
      });
  };

  renderQuote = () => {
    const { content, title } = this.state.quote;

    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  };

  render() {
    const { hasQuote } = this.state;

    return (
      <Fragment>
        <h1>Random Quote</h1>
        <button onClick={this.getRandomQuote}>New Quote</button>
        <br />
        {hasQuote === true ? this.renderQuote() : 'No Quote'}
      </Fragment>
    );
  }
}
export default RandomQuote;
