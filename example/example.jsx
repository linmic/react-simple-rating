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
        <h1>react-simple-rating examples</h1>
        <h2>this is display-only</h2>
        <Rating rating={3.43} displayOnly={true} />
        <h2>this is funtional with onSubmit</h2>
        <Rating displayOnly={false} onSubmit={this.handleClick} />
        <h2>arbitrary maxRating</h2>
        <Rating displayOnly={false} maxRating={7} onSubmit={this.handleClick} />
        <h2>this demonstrates how to use your custom unicode symbols</h2>
        <Rating rating={3.43} displayOnly={true} ratingSymbol={'\u2764'} /><br />
        <h2>and yes, of course you can use your favorite icons from <a href="http://fontawesome.io/" target="_blank" rel="noopener">FontAwesome</a></h2>
        <Rating rating={4.33} displayOnly={true} ratingSymbol={'\uf091'} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('demo_container'));
