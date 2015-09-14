(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('Rating', ['exports', 'module', 'react'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.React);
    global.Rating = mod.exports;
  }
})(this, function (exports, module, _react) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _React = _interopRequireDefault(_react);

  var Rating = (function (_Component) {
    _inherits(Rating, _Component);

    _createClass(Rating, null, [{
      key: 'propTypes',
      value: {
        onSubmit: _React['default'].PropTypes.func,
        rating: _React['default'].PropTypes.number,
        displayOnly: _React['default'].PropTypes.bool,
        maxRating: _React['default'].PropTypes.number,
        ratingSymbol: _React['default'].PropTypes.string
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        rating: 0,
        displayOnly: false,
        maxRating: 5,
        ratingSymbol: '★' },
      enumerable: true
    }]);

    // unicode star

    function Rating(props) {
      _classCallCheck(this, Rating);

      _get(Object.getPrototypeOf(Rating.prototype), 'constructor', this).call(this, props);

      this.state = {
        rating: props.rating
      };
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
        var _this = this;

        return Array.from(Array(this.props.maxRating).keys()).map(function (idx) {
          return _React['default'].createElement(
            'i',
            { key: 'rating_symbol_mask_' + idx },
            _this.props.ratingSymbol
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var symbols = Array.from(Array(this.props.maxRating).keys()).map(function (idx) {
          var order = idx + 1;
          var symbolClassName = Math.abs(_this2.props.maxRating - idx) === _this2.state.rating ? 'active' : '';

          return _React['default'].createElement(
            'i',
            { key: 'rating_symbol_' + idx, 'data-order': order, className: symbolClassName },
            _this2.props.ratingSymbol
          );
        });

        var currentRatingWidthPercentage = this.state.rating && this.props.displayOnly ? this.state.rating / this.props.maxRating * 100 : 0;
        var ratingClassName = this.props.displayOnly ? 'rating display-only' : 'rating';
        var clickEventHandler = this.props.displayOnly ? null : this.handleClick.bind(this);

        return _React['default'].createElement(
          'div',
          { className: ratingClassName, onClick: clickEventHandler },
          symbols,
          _React['default'].createElement(
            'div',
            { className: 'current-rating', style: { width: currentRatingWidthPercentage + '%' } },
            this.renderMask()
          )
        );
      }
    }]);

    return Rating;
  })(_react.Component);

  module.exports = Rating;
});