/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./imageMasonryGallery/component.js":
/*!******************************************!*\
  !*** ./imageMasonryGallery/component.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageMasonryGallery; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar vcvAPI = vc_cake__WEBPACK_IMPORTED_MODULE_9___default().getService('api');\n\nvar ImageMasonryGallery = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ImageMasonryGallery, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(ImageMasonryGallery);\n\n  function ImageMasonryGallery(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ImageMasonryGallery);\n\n    _this = _super.call(this, props);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"currentImg\", 0);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"loadingIndex\", 0);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"data\", []);\n\n    _this.loadImage = _this.loadImage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ImageMasonryGallery, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.prepareImages(JSON.parse(JSON.stringify(this.props.atts)));\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (!lodash__WEBPACK_IMPORTED_MODULE_10___default().isEqual(prevProps, this.props)) {\n        this.currentImg = 0;\n        this.data = [];\n        this.loadingIndex++;\n        this.prepareImages(JSON.parse(JSON.stringify(this.props.atts)), true);\n      }\n\n      vc_cake__WEBPACK_IMPORTED_MODULE_9___default().env('iframe') && vc_cake__WEBPACK_IMPORTED_MODULE_9___default().env('iframe').vcv.trigger('ready');\n    }\n  }, {\n    key: \"prepareImages\",\n    value: function prepareImages(atts) {\n      var clearColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var image = atts.image;\n      var imgSources = this.getImageUrl(image);\n      var columnCount = atts.columns <= 0 ? 1 : atts.columns;\n      var cols = [];\n\n      for (var i = 0; i < columnCount; i++) {\n        cols.push(0);\n        this.data.push([]);\n      }\n\n      if (clearColumns) {\n        cols = [];\n\n        for (var _i = 0; _i < columnCount; _i++) {\n          cols.push(0);\n        }\n      }\n\n      this.loadImage(imgSources, cols);\n    }\n  }, {\n    key: \"loadImage\",\n    value: function loadImage(imgSources, cols) {\n      if (!imgSources.length) {\n        this.setState({\n          columnData: this.data\n        });\n        return;\n      }\n\n      var img = new window.Image();\n      img.loadingIndex = this.loadingIndex;\n      img.onload = this.imgLoadHandler.bind(this, imgSources, cols, img);\n      img.src = imgSources[this.currentImg];\n    }\n  }, {\n    key: \"imgLoadHandler\",\n    value: function imgLoadHandler(imgSources, cols, img) {\n      if (img.loadingIndex === this.loadingIndex) {\n        var height = this.getImageHeight(img.width, img.height);\n        var smallestCol = this.getSmallestFromArray(cols);\n        cols[smallestCol] += height;\n        this.data[smallestCol].push(this.props.atts.image[this.currentImg]);\n        this.currentImg++;\n\n        if (this.currentImg < imgSources.length) {\n          this.loadImage(imgSources, cols);\n        } else {\n          this.setState({\n            columnData: this.data\n          });\n        }\n      }\n    }\n  }, {\n    key: \"getImageHeight\",\n    value: function getImageHeight(width, height) {\n      var newWidth = 50;\n      var proportion = width / newWidth;\n      return height / proportion;\n    }\n  }, {\n    key: \"getSmallestFromArray\",\n    value: function getSmallestFromArray(arr) {\n      var smallestIndex = 0;\n      var smallest = arr[0];\n      arr.forEach(function (height, index) {\n        if (height < smallest) {\n          smallest = arr[index];\n          smallestIndex = index;\n        }\n      });\n      return smallestIndex;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var image = atts.image,\n          shape = atts.shape,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId,\n          clickableOptions = atts.clickableOptions,\n          showCaption = atts.showCaption,\n          gap = atts.gap,\n          columns = atts.columns;\n      var containerClasses = ['vce-image-masonry-gallery'];\n      var wrapperClasses = ['vce-image-masonry-gallery-wrapper vce'];\n      var containerProps = {};\n      var CustomTag = 'div';\n      var columnData = this.state && this.state.columnData;\n      var columnHtml = [];\n\n      if (columnData) {\n        var imageIndex = 0;\n        columnData.forEach(function (col, colIndex) {\n          var galleryItems = [];\n          col && col.forEach(function (src, index) {\n            var imgSrc = _this2.getImageUrl(src);\n\n            var customProps = {};\n            var classes = 'vce-image-masonry-gallery-item';\n            var imgClasses = 'vce-image-masonry-gallery-img';\n            var customImageProps = {\n              alt: src && src.alt ? src.alt : ''\n            };\n\n            if (clickableOptions === 'url' && src.link && src.link.url) {\n              CustomTag = 'a';\n              var _src$link = src.link,\n                  url = _src$link.url,\n                  title = _src$link.title,\n                  targetBlank = _src$link.targetBlank,\n                  relNofollow = _src$link.relNofollow;\n              customProps = {\n                href: url,\n                title: title,\n                target: targetBlank ? '_blank' : undefined,\n                rel: relNofollow ? 'nofollow' : undefined\n              };\n            } else if (clickableOptions === 'imageNewTab') {\n              CustomTag = 'a';\n              customProps = {\n                href: imgSrc,\n                target: '_blank'\n              };\n            } else if (clickableOptions === 'lightbox') {\n              CustomTag = 'a';\n              customProps = {\n                href: imgSrc,\n                'data-lightbox': \"lightbox-\".concat(id)\n              };\n            } else if (clickableOptions === 'photoswipe') {\n              CustomTag = 'a';\n              customProps = {\n                href: imgSrc,\n                'data-photoswipe-image': id,\n                'data-photoswipe-index': imageIndex,\n                'data-photoswipe-item': \"photoswipe-\".concat(id)\n              };\n\n              if (showCaption && src && src.caption) {\n                customProps['data-photoswipe-caption'] = src.caption;\n              }\n\n              containerProps['data-photoswipe-gallery'] = id;\n              imageIndex++;\n            }\n\n            if (image[index] && image[index].filter && image[index].filter !== 'normal') {\n              classes += \" vce-image-filter--\".concat(image[index].filter);\n            }\n\n            galleryItems.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(CustomTag, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, customProps, {\n              className: classes,\n              key: \"vce-image-masonry-gallery-item-\".concat(index, \"-\").concat(id)\n            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"img\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n              className: imgClasses,\n              src: _this2.getImageUrl(src)\n            }, customImageProps))));\n          });\n          columnHtml.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", {\n            className: \"vce-image-masonry-gallery-column\",\n            key: \"vce-image-masonry-gallery-col-\".concat(colIndex, \"-\").concat(id)\n          }, galleryItems));\n        });\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      wrapperClasses.push(\"vce-image-masonry-gallery--gap-\".concat(gap));\n      wrapperClasses.push(\"vce-image-masonry-gallery--columns-\".concat(columns));\n\n      if (shape === 'rounded') {\n        containerClasses.push('vce-image-masonry-gallery--border-rounded');\n      }\n\n      if (metaCustomId) {\n        containerProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: containerClasses.join(' ')\n      }, editor, containerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: wrapperClasses.join(' '),\n        id: 'el-' + id\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", {\n        className: \"vce-image-masonry-gallery-list\"\n      }, columnHtml)));\n    }\n  }]);\n\n  return ImageMasonryGallery;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./imageMasonryGallery/component.js?");

/***/ }),

/***/ "./imageMasonryGallery/index.js":
/*!**************************************!*\
  !*** ./imageMasonryGallery/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./imageMasonryGallery/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default().getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./imageMasonryGallery/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./imageMasonryGallery/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./imageMasonryGallery/editor.css\"),\n  mixins: {\n    imageGalleryColumns: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/imageGalleryColumns.pcss */ \"./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss\")\n    },\n    imageGalleryGap: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/imageGalleryGap.pcss */ \"./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryGap.pcss\")\n    }\n  }\n}, '');\n\n//# sourceURL=webpack:///./imageMasonryGallery/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss":
/*!*******************************************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss ***!
  \*******************************************************************************************************/
/***/ (function(module) {

eval("module.exports = \"@media (min-width: 544px) {\\n  .vce-image-masonry-gallery {\\n    &--columns-$selector {\\n      .vce-image-masonry-gallery-column {\\n        @if $columns != false {\\n          -webkit-flex: 0 0 calc(100% / $columns);\\n              -ms-flex: 0 0 calc(100% / $columns);\\n                  flex: 0 0 calc(100% / $columns);\\n          max-width: calc(100% / $columns);\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryGap.pcss":
/*!***************************************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryGap.pcss ***!
  \***************************************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-image-masonry-gallery {\\n  &--gap-$selector {\\n    @if $gap != false {\\n      .vce-image-masonry-gallery-list {\\n        margin-left: calc(-$(gap)px / 2);\\n        margin-right: calc(-$(gap)px / 2);\\n        margin-bottom: -$(gap)px;\\n      }\\n    }\\n\\n    @if $gap != false {\\n      .vce-image-masonry-gallery-item {\\n        padding-left: calc($(gap)px / 2);\\n        padding-right: calc($(gap)px / 2);\\n        margin-bottom: $(gap)px;\\n      }\\n    }\\n  }\\n}\\n\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGallery/cssMixins/imageGalleryGap.pcss?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGallery/editor.css":
/*!*******************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./imageMasonryGallery/editor.css ***!
  \*******************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-image-masonry-gallery {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGallery/editor.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGallery/styles.css":
/*!*******************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./imageMasonryGallery/styles.css ***!
  \*******************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-image-masonry-gallery-wrapper {\\n  overflow: hidden;\\n}\\n\\n.vce-image-masonry-gallery-list {\\n  -webkit-flex: 1 1 auto;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  display: -webkit-flex;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-flex-direction: row;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-flex-wrap: wrap;\\n      -ms-flex-wrap: wrap;\\n          flex-wrap: wrap;\\n  -webkit-justify-content: flex-start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  -webkit-align-items: flex-start;\\n      -ms-flex-align: start;\\n          align-items: flex-start;\\n  -webkit-align-content: flex-start;\\n      -ms-flex-line-pack: start;\\n          align-content: flex-start;\\n}\\n\\n.vce-image-masonry-gallery-column {\\n  -webkit-flex: 0 0 100%;\\n      -ms-flex: 0 0 100%;\\n          flex: 0 0 100%;\\n  max-width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.vce-image-masonry-gallery-item {\\n  display: block;\\n}\\n\\na.vce-image-masonry-gallery-item {\\n  color: transparent;\\n  border-bottom: 0;\\n  text-decoration: none;\\n  box-shadow: none;\\n}\\n\\na.vce-image-masonry-gallery-item:hover,\\na.vce-image-masonry-gallery-item:focus {\\n  border-bottom: 0;\\n  text-decoration: none;\\n  box-shadow: none;\\n}\\n\\n.vce-image-masonry-gallery-img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.vce-image-masonry-gallery--border-rounded .vce-image-masonry-gallery-img {\\n  border-radius: 5px;\\n}\\n\\n.vce-image-masonry-gallery .vce-image-masonry-gallery-item .vce-image-masonry-gallery-img {\\n  box-shadow: none;\\n}\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGallery/styles.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./imageMasonryGallery/settings.json":
/*!*******************************************!*\
  !*** ./imageMasonryGallery/settings.json ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"image\":{\"type\":\"attachimage\",\"access\":\"public\",\"value\":[\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-1.jpg\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-2.jpg\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-3.jpg\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-4.jpg\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-5.jpg\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/imageMasonryGallery/image-6.jpg\"],\"options\":{\"multiple\":true,\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"url\"}}},\"actions\":[{\"action\":\"attachImageUrls\"}]},\"url\":false,\"imageFilter\":true}},\"shape\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"square\",\"options\":{\"label\":\"Shape\",\"values\":[{\"label\":\"Square\",\"value\":\"square\",\"icon\":\"vcv-ui-icon-attribute-shape-square\"},{\"label\":\"Rounded\",\"value\":\"rounded\",\"icon\":\"vcv-ui-icon-attribute-shape-rounded\"}]}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"clickableOptions\",\"showCaption\",\"image\",\"columns\",\"gap\",\"shape\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"clickableOptions\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"lightbox\",\"options\":{\"label\":\"OnClick action\",\"description\":\"Choose an event performed when clicking on the image.\",\"values\":[{\"label\":\"None\",\"value\":\"\"},{\"label\":\"Lightbox\",\"value\":\"lightbox\"},{\"label\":\"PhotoSwipe\",\"value\":\"photoswipe\"},{\"label\":\"Open the image in a new tab\",\"value\":\"imageNewTab\"},{\"label\":\"Link selector\",\"value\":\"url\"}]}},\"showCaption\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Show the image caption in gallery view\",\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"gap\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"10\",\"options\":{\"label\":\"Gap\",\"description\":\"Enter the gap in pixels (example: 5).\",\"cssMixin\":{\"mixin\":\"imageGalleryGap\",\"property\":\"gap\",\"namePattern\":\"[\\\\\\\\da-f]+\"}}},\"columns\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"3\",\"options\":{\"label\":\"Number of columns\",\"cssMixin\":{\"mixin\":\"imageGalleryColumns\",\"property\":\"columns\",\"namePattern\":\"[\\\\\\\\da-f]+\"}}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"imageMasonryGallery\"},\"sharedAssetsLibrary\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"lightbox\"}}},\"libsNames\":[\"lightbox\"]},{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"libsNames\":[\"photoswipe\"]}]}}}');\n\n//# sourceURL=webpack:///./imageMasonryGallery/settings.json?");

/***/ })

},[['./imageMasonryGallery/index.js']]]);