"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_ContactUs_Chat_js"],{

/***/ "./resources/js/components/pages/ContactUs/BodyChat.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/ContactUs/BodyChat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BodyChat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SentChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SentChat */ "./resources/js/components/pages/ContactUs/SentChat.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ "./node_modules/react-lazy-load-image-component/src/effects/blur.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function BodyChat(_ref) {
  var userId = _ref.userId,
      scroll = _ref.scroll;
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var chatUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.chatUser.data;
  });

  function time(text) {
    var time = new Date(text);
    return " ".concat(time.getHours(), ":").concat(time.getMinutes());
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: " height-con2 padding",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      style: {
        overflowY: 'auto',
        height: '85%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: " row flex-direction-reverse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col s100",
          ref: scroll
        }), chatUser ? chatUser.map(function (iteme, index) {
          return iteme.type == 'text' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col s100 padding ".concat(iteme.user_id == auth.id ? ' rtl' : ''),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: " display-container margin padding width-fit-content m-w large textc-1 bold text-overflow2 ".concat(iteme.user_id == auth.id ? ' bgc-4 round-right' : ' bgc-3 round-left'),
              children: [iteme.user_id == auth.id && iteme.recipients[0].read_at != null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: " fas fa-check textc-1 small"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: " fas fa-check textc-1 small"
                })]
              }) : iteme.user_id == auth.id && iteme.recipients[0].read_at == null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: " fas fa-check textc-1 small"
              }) : null, iteme.body, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "small",
                children: [" ", time(iteme.created_at), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "".concat(iteme.user_id == auth.id ? ' display-topright s-right' : ' display-topleft s-left')
              })]
            })
          }, index) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col s100  ".concat(iteme.user_id == auth.id ? ' rtl' : ''),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: " display-container margin width-fit-content m-w border ".concat(iteme.user_id == auth.id ? ' borderc-4' : ' borderc-3'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
                src: '../storage/' + iteme.body.file_path,
                alt: iteme.body.file_name,
                width: "250px",
                height: '250px',
                effect: 'blur'
              })
            })
          }, index);
        }) : null]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SentChat__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userId: userId,
      scroll: scroll
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/pages/ContactUs/Chat.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/ContactUs/Chat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Api_ChatUserApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api/ChatUserApi */ "./resources/js/components/Api/ChatUserApi.js");
/* harmony import */ var _Store_ChatUserSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Store/ChatUserSlice */ "./resources/js/components/Store/ChatUserSlice.js");
/* harmony import */ var _BodyChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BodyChat */ "./resources/js/components/pages/ContactUs/BodyChat.js");
/* harmony import */ var _ListChat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListChat */ "./resources/js/components/pages/ContactUs/ListChat.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function Chat(_ref) {
  var userId = _ref.userId;
  var scroll = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (auth.token && auth.role == "user" || auth.token && auth.role == "admin") {
      (0,_Api_ChatUserApi__WEBPACK_IMPORTED_MODULE_2__.markAsReadApi)(auth.token, userId).then(function (responsee) {})["catch"](function () {
        return alert("حدث خطأ في إرسال طلب قراءة المحادثة");
      });
      scroll.current.scrollIntoView();
      window.scrollTo({
        top: 0
      });
    }

    if (auth.token && auth.role == "admin") {
      (0,_Api_ChatUserApi__WEBPACK_IMPORTED_MODULE_2__.allMessageApi)(auth.token, userId).then(function (responsee) {
        dispatch((0,_Store_ChatUserSlice__WEBPACK_IMPORTED_MODULE_3__.addChatUser)(responsee.data.messages));
        scroll.current.scrollIntoView();
        window.scrollTo({
          top: 0
        });
      })["catch"](function () {
        return alert("حدث خطأ في الحصول على المحادثة");
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: auth.token && auth.role == "user" || auth.token && auth.role == "admin" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: " bgc-1 height-con textc-2 animate-top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: " row",
        children: [auth.role == "user" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: " col l25 hide-medium hide-small",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ListChat__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: " col ".concat(auth.role == "user" ? ' l75' : ' s100'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_BodyChat__WEBPACK_IMPORTED_MODULE_4__["default"], {
            userId: userId,
            scroll: scroll
          })
        })]
      })
    }) : userId == '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Navigate, {
      to: "/login"
    }) : null
  });
}

/***/ }),

/***/ "./resources/js/components/pages/ContactUs/ListChat.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/ContactUs/ListChat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListChat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ListChat() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "rightbar height-con2",
      style: {
        overflowY: 'auto'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: " border borderc-3 round-xxlarge margin-auto padding hover-bgc-4 hover-borderc-4 width-75",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: "../img/dashuser.png",
          alt: "",
          className: "border borderc-1 circle display-inline",
          style: {
            width: "40px",
            height: "40px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: " button hover-none textc-3 display-inline",
          children: "Admin"
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/pages/ContactUs/SentChat.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/ContactUs/SentChat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SentChat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Api_ChatUserApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api/ChatUserApi */ "./resources/js/components/Api/ChatUserApi.js");
/* harmony import */ var _Store_ChatUserSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Store/ChatUserSlice */ "./resources/js/components/Store/ChatUserSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function SentChat(_ref) {
  var _this = this;

  var userId = _ref.userId,
      scroll = _ref.scroll;
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      settext = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      image = _React$useState4[0],
      setimage = _React$useState4[1];

  var handlefile = function handlefile(e) {
    e.preventDefault();
    setimage(e.target.files[0]);
  };

  var submit = function submit(e) {
    e.preventDefault();
    var userid2 = userId;

    if (auth.role == "user") {
      userid2 = 1;
    }

    var formData = new FormData();

    if (image != null) {
      formData.append("user_id", userid2);
      formData.append("attachment", image);
      formData.append("body", _this);
    }

    if (text != '') {
      formData.append("message", text);
      formData.append("user_id", userid2);
    }

    (0,_Api_ChatUserApi__WEBPACK_IMPORTED_MODULE_2__.sentMessageApi)(auth.token, formData).then(function (responsee) {
      dispatch((0,_Store_ChatUserSlice__WEBPACK_IMPORTED_MODULE_3__.updataChatUser)(responsee.data.data));
      settext('');
      setimage(null);
      scroll.current.scrollIntoView();
      window.scrollTo({
        top: 0
      });
    })["catch"](function () {
      return alert("حدث خطأ في إرسال الرسالة");
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
      style: {
        height: '15%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: " row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "col s100",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "submit",
            className: "button round-large border hover-borderc-4 textc-2 margin display-inline",
            onClick: function onClick(e) {
              return submit(e);
            },
            children: "Send"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "file",
            multiple: true,
            accept: "image/*",
            className: "input round focus-border display-inline",
            style: {
              width: '102px',
              height: '44px',
              padding: '4px'
            },
            onChange: function onChange(e) {
              return handlefile(e);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "text",
            className: "input width-50 transparent round focus-border textc-2 margin display-inline",
            placeholder: "Message ...",
            value: text,
            onChange: function onChange(e) {
              return settext(e.target.value);
            }
          })]
        })
      })
    })
  });
}

/***/ })

}]);