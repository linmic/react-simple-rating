import React, { Component, PropTypes } from 'react';

export default class Rating extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    rating: PropTypes.number,
    displayOnly: PropTypes.bool,
    maxRating: PropTypes.number,
    ratingSymbol: PropTypes.string,
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

  handleClick = (e) => {
    e.preventDefault();

    const {
      maxRating,
      onSubmit,
    } = this.props;
    const order = Math.abs(maxRating - e.target.getAttribute('data-order')) + 1;

    this.setState({ rating: order });

    if (onSubmit) {
      onSubmit(order);
    }
  };

  renderMask() {
    const {
      maxRating,
      ratingSymbol,
    } = this.props;

    return Array.from({ length: maxRating }, (_, idx) => <i key={ idx }>{ ratingSymbol }</i>);
  }

  render() {
    const { rating } = this.state;
    const {
      maxRating,
      ratingSymbol,
      displayOnly,
    } = this.props;

    const symbols = Array.from({ length: maxRating }, (_, idx) => {
      const order = idx + 1;
      const symbolClassName = 
        (Math.abs(maxRating - idx) === rating) ? 'active' : '';

      return (
        <i key={ idx } data-order={ order } className={ symbolClassName }>{ ratingSymbol }</i>
      );
    });

    const currentRatingWidthPercentage = (rating && displayOnly) ? rating / maxRating * 100 : 0;
    const ratingClassName = displayOnly ? 'rating display-only' : 'rating';
    const clickEventHandler = displayOnly ? null : this.handleClick;

    return (
      <div className={ ratingClassName } onClick={ clickEventHandler }>
        {symbols}
        <div className="current-rating" style={{ width: `${currentRatingWidthPercentage}%` }}>
          {this.renderMask()}
        </div>
      </div>
    );
  }
}
