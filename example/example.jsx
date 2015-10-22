'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rating from '../dist/index';

let App = React.createClass({
  getInitialState() {
    return {
      currentRating: 0
    };
  },

  handleClick(rating) {
    this.setState({
      currentRating: rating 
    });
  },

  render() {
    return (
      <div id="demo">
        <h1>this is display-only</h1>
        <Rating rating={3.43} displayOnly={true} />
        <h1>this is funtional with onSubmit</h1>
        <Rating displayOnly={false} onSubmit={this.handleClick} />
        <h1>arbitrary maxRating</h1>
        <Rating displayOnly={false} maxRating={7} onSubmit={this.handleClick} />
        <h1>this demonstrates how to use your custom unicode symbols</h1>
        <Rating rating={3.43} displayOnly={true} ratingSymbol={'\u2764'} /><br />
        <h1>and yes, of course you can use your favorite icons from FontAwesome</h1>
        <Rating rating={4.33} displayOnly={true} ratingSymbol={'\uf091'} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('demo_container'));
