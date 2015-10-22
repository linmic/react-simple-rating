import React, { Component } from 'react';

export default class Rating extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.func,
    rating: React.PropTypes.number,
    displayOnly: React.PropTypes.bool,
    maxRating: React.PropTypes.number,
    ratingSymbol: React.PropTypes.string,
  };

  static defaultProps = {
    rating: 0,
    displayOnly: false,
    maxRating: 5,
    ratingSymbol: '\u2605', // unicode star
  }

  constructor(props) {
    super(props);

    this.state = {
      rating: props.rating,
    };
  }

  handleClick(e) {
    e.preventDefault();

    const order = Math.abs(this.props.maxRating - e.target.getAttribute('data-order')) + 1;

    this.setState({
      rating: order,
    });

    if (this.props.onSubmit) {
      this.props.onSubmit(order);
    }
  }

  renderMask() {
    return Array.from(Array(this.props.maxRating).keys())
                .map(idx => <i key={`rating_symbol_mask_${idx}`}>{this.props.ratingSymbol}</i>);
  }

  render() {
    const symbols = Array.from(Array(this.props.maxRating).keys()).map(idx => {
      const order = idx + 1;
      const symbolClassName = 
        (Math.abs(this.props.maxRating - idx) === this.state.rating) ?
        'active' : '';

      return (
        <i key={`rating_symbol_${idx}`} data-order={order} className={symbolClassName}>{this.props.ratingSymbol}</i>
      );
    });

    const currentRatingWidthPercentage =
      (this.props.rating && this.props.displayOnly) ?
      this.props.rating / this.props.maxRating * 100 : 0;
    const ratingClassName = this.props.displayOnly ? 'rating display-only' : 'rating';
    const clickEventHandler = this.props.displayOnly ? null : this.handleClick.bind(this);

    return (
      <div className={ratingClassName} onClick={clickEventHandler}>
        {symbols}
        <div className="current-rating" style={{width: `${currentRatingWidthPercentage}%`}}>
          {this.renderMask()}
        </div>
      </div>
    );
  }
}
