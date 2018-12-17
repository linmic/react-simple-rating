'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var Rating = (function(_Component) {
  _inherits(Rating, _Component);

  function Rating(props) {
    _classCallCheck(this, Rating);

    var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

    _this.handleClick = function(e) {
      e.preventDefault();

      var _this$props = _this.props,
        maxRating = _this$props.maxRating,
        onSubmit = _this$props.onSubmit;

      var order = Math.abs(maxRating - e.target.getAttribute('data-order')) + 1;

      _this.setState({ rating: order });

      if (onSubmit) {
        onSubmit(order);
      }
    };

    _this.handleMouseOver = function(index) {
      var onMouseOver = _this.props.onMouseOver;

      if (onMouseOver) {
        onMouseOver(index);
      }
    };

    _this.handleMouseOut = function(index) {
      var onMouseOut = _this.props.onMouseOut;

      if (onMouseOut) {
        onMouseOut(index);
      }
    };

    _this.state = {
      rating: props.rating,
    };
    return _this;
  }

  _createClass(Rating, [
    {
      key: 'renderMask',
      value: function renderMask() {
        var _props = this.props,
          maxRating = _props.maxRating,
          ratingSymbol = _props.ratingSymbol;

        return Array.from({ length: maxRating }, function(_, idx) {
          return _react2.default.createElement('i', { key: idx }, ratingSymbol);
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var rating = this.state.rating;
        var _props2 = this.props,
          maxRating = _props2.maxRating,
          ratingSymbol = _props2.ratingSymbol,
          displayOnly = _props2.displayOnly;

        var currentRatingWidthPercentage = rating && displayOnly ? (rating / maxRating) * 100 : 0;
        var ratingClassName = displayOnly ? 'rating display-only' : 'rating';
        var clickEventHandler = displayOnly ? null : this.handleClick;
        var symbols = Array.from({ length: maxRating }, function(_, idx) {
          var order = idx + 1;
          var symbolClassName = Math.abs(maxRating - idx) === rating ? 'active' : '';

          return _react2.default.createElement(
            'i',
            {
              key: idx,
              'data-order': order,
              className: symbolClassName,
              onMouseOver: function onMouseOver() {
                return _this2.handleMouseOver(Math.abs(maxRating - idx));
              },
              onMouseOut: function onMouseOut() {
                return _this2.handleMouseOut(Math.abs(maxRating - idx));
              },
            },
            ratingSymbol
          );
        });

        return _react2.default.createElement(
          'div',
          { className: ratingClassName, onClick: clickEventHandler },
          symbols,
          _react2.default.createElement(
            'div',
            { className: 'current-rating', style: { width: currentRatingWidthPercentage + '%' } },
            this.renderMask()
          )
        );
      },
    },
  ]);

  return Rating;
})(_react.Component);

Rating.propTypes = {
  onSubmit: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  rating: _react.PropTypes.number,
  displayOnly: _react.PropTypes.bool,
  maxRating: _react.PropTypes.number,
  ratingSymbol: _react.PropTypes.string,
};
Rating.defaultProps = {
  rating: 0,
  displayOnly: false,
  maxRating: 5,
  ratingSymbol: '\u2605', // unicode star
};
exports.default = Rating;
