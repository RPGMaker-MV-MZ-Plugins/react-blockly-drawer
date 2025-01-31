"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Xml = exports.Value = exports.Shadow = exports.Sep = exports.Mutation = exports.Field = exports.Category = exports.Block = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["children"],
  _excluded5 = ["children"],
  _excluded6 = ["children"],
  _excluded7 = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Mutation = exports.Mutation = function Mutation(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("mutation", props, children);
};
var Block = exports.Block = function Block(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded2);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("block", props, children);
};
var Category = exports.Category = function Category(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded3);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("category", props, children);
};
var Field = exports.Field = function Field(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded4);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("field", props, children);
};
var Value = exports.Value = function Value(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded5);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("value", props, children);
};
var Shadow = exports.Shadow = function Shadow(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded6);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("shadow", props, children);
};
var Sep = exports.Sep = function Sep(p) {
  var children = p.children,
    props = _objectWithoutProperties(p, _excluded7);
  props.is = "blockly";
  return /*#__PURE__*/_react["default"].createElement("sep", props, children);
};
var XmlComponent = /*#__PURE__*/function (_Component) {
  _inherits(XmlComponent, _Component);
  var _super = _createSuper(XmlComponent);
  function XmlComponent() {
    _classCallCheck(this, XmlComponent);
    return _super.apply(this, arguments);
  }
  _createClass(XmlComponent, [{
    key: "render",
    value: function render() {
      var _this = this;
      var injectedProps = Object.assign({}, this.props, {
        ref: function ref(x) {
          return _this.props.onRef(x);
        }
      });
      delete injectedProps.onRef;
      injectedProps.is = "blockly";
      return /*#__PURE__*/_react["default"].createElement('xml', injectedProps);
    }
  }]);
  return XmlComponent;
}(_react.Component);
;
var Xml = exports.Xml = XmlComponent;
var _default = exports["default"] = {
  Mutation: Mutation,
  Block: Block,
  Xml: Xml,
  Category: Category,
  Field: Field,
  Value: Value,
  Shadow: Shadow,
  Sep: Sep
};