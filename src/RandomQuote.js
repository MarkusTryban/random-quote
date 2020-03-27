import React, { Component, Fragment } from 'react';

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quoteData: [],
    };
    this.GET_QUOTE =
      'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
  }

  getRandomQuote = () => {
    fetch(this.GET_QUOTE)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          quoteData: result,
        });
        // result[Math.floor(Math.random() * result.length)],
      });
  };

  render() {
    const { quoteData } = this.state;

    return (
      <Fragment>
        <h1>Random Quote</h1>
        <button onClick={this.getRandomQuote}>New Quote</button>
        <br />
        <ul>
          {quoteData.map((data) => (
            <li>
              {data.content} {data.title}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default RandomQuote;
