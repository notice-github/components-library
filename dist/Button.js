"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: "yellow"
    }
  }, children);
}