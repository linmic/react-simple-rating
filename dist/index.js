'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_Component) {
  _inherits(Rating, _Component);

  function Rating(props) {
    _classCallCheck(this, Rating);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).call(this, props));

    _this.state = {
      rating: props.rating
    };
    return _this;
  }

  _createClass(Rating, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();

      var order = Math.abs(this.props.maxRating - e.target.getAttribute('data-order')) + 1;

      this.setState({
        rating: order
      });

      if (this.props.onSubmit) {
        this.props.onSubmit(order);
      }
    }
  }, {
    key: 'renderMask',
    value: function renderMask() {
      var _this2 = this;

      return Array.from(Array(this.props.maxRating).keys()).map(function (idx) {
        return _react2.default.createElement(
          'i',
          { key: 'rating_symbol_mask_' + idx },
          _this2.props.ratingSymbol
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var symbols = Array.from(Array(this.props.maxRating).keys()).map(function (idx) {
        var order = idx + 1;
        var symbolClassName = Math.abs(_this3.props.maxRating - idx) === _this3.state.rating ? 'active' : '';

        return _react2.default.createElement(
          'i',
          { key: 'rating_symbol_' + idx, 'data-order': order, className: symbolClassName },
          _this3.props.ratingSymbol
        );
      });

      var currentRatingWidthPercentage = this.props.rating && this.props.displayOnly ? this.props.rating / this.props.maxRating * 100 : 0;
      var ratingClassName = this.props.displayOnly ? 'rating display-only' : 'rating';
      var clickEventHandler = this.props.displayOnly ? null : this.handleClick.bind(this);

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
    }
  }]);

  return Rating;
}(_react.Component);

Rating.propTypes = {
  onSubmit: _react2.default.PropTypes.func,
  rating: _react2.default.PropTypes.number,
  displayOnly: _react2.default.PropTypes.bool,
  maxRating: _react2.default.PropTypes.number,
  ratingSymbol: _react2.default.PropTypes.string
};
Rating.defaultProps = {
  rating: 0,
  displayOnly: false,
  maxRating: 5,
  ratingSymbol: '★' };
exports.default = Rating;