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

  render() {
    const { quoteData } = this.state;

    return (
      <Fragment>
        <div>
          <h1>Random Quote</h1>
          <button onClick={this.getRandomQuote}>New Quote</button>
          <br />

          <ul>
            {quoteData.map((data) => (
              <li key={data.quote}>{data.quote}</li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default RandomQuote;
