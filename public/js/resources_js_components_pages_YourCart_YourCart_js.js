"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_YourCart_YourCart_js"],{

/***/ "./resources/js/components/pages/YourCart/TableCart/TableCart.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/YourCart/TableCart/TableCart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ "./node_modules/react-lazy-load-image-component/src/effects/blur.css");
/* harmony import */ var _Api_CartApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Api/CartApi */ "./resources/js/components/Api/CartApi.js");
/* harmony import */ var _Store_CartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Store/CartSlice */ "./resources/js/components/Store/CartSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function TableCart() {
  var cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.cart.data;
  });
  var products = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.products.data;
  });
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var deletecart = function deletecart(id, index) {
    (0,_Api_CartApi__WEBPACK_IMPORTED_MODULE_4__.deleteCartApi)(auth.token, id).then(function () {
      dispatch((0,_Store_CartSlice__WEBPACK_IMPORTED_MODULE_5__.deleteCart)(index));
    })["catch"](function () {
      return alert("حدث خطأ في حذف الكرت");
    });
  };

  var editcart = function editcart(id, product_id, index, quantity) {
    (0,_Api_CartApi__WEBPACK_IMPORTED_MODULE_4__.editCartApi)(auth.token, id, {
      product_id: product_id,
      quantity: quantity
    }).then(function (responsee) {
      dispatch((0,_Store_CartSlice__WEBPACK_IMPORTED_MODULE_5__.editCart)([index + 1, responsee.data.data]));
    })["catch"](function () {
      return alert("حدث خطأ في تعديل الكرت");
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "transparent margin padding",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "responsive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table-all",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Product"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Unit Price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Quantity"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Total"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: cart ? cart.map(function (itemec, indexc) {
            return products.map(function (itemep, indexp) {
              return itemec.product_id == itemep.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
                    src: '../upload/product_images/' + itemep.product_image,
                    alt: itemep.title,
                    width: "50px",
                    height: '50px',
                    effect: 'blur'
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: itemep.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: itemep.disscount <= 100 ? itemep.price - itemep.price / 100 * itemep.disscount : itemep.price
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "badge large",
                    onClick: function onClick() {
                      return editcart(itemec.id, itemec.product_id, indexc, Number(itemec.quantity) - 1);
                    },
                    children: "-"
                  }), " ", itemec.quantity, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "badge large",
                    onClick: function onClick() {
                      return editcart(itemec.id, itemec.product_id, indexc, Number(itemec.quantity) + 1);
                    },
                    children: "+"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: itemep.disscount <= 100 ? (itemep.price - itemep.price / 100 * itemep.disscount) * Number(itemec.quantity) : itemep.price * Number(itemec.quantity)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "badge",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "fas fa-trash-alt textc-1",
                      onClick: function onClick() {
                        return deletecart(itemec.id, indexc);
                      }
                    })
                  })
                })]
              }, indexc) : null;
            });
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tr", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
              children: "no Cart"
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/components/pages/YourCart/YourCart.js":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/YourCart/YourCart.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YourCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TableCart_TableCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCart/TableCart */ "./resources/js/components/pages/YourCart/TableCart/TableCart.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function YourCart() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "bar margin-top display-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "bar-item xlarge textc-4 bottombar borderc-4",
          children: "Cart"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TableCart_TableCart__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ })

}]);