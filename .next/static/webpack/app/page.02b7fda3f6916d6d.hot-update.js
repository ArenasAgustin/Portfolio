"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Stars/Stars.jsx":
/*!****************************************!*\
  !*** ./app/components/Stars/Stars.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Stars() {\n    _s();\n    function starsBackground() {\n        ready(function() {\n            initializeBackground();\n        });\n        let resizeTimeout;\n        let resizeCooldown = 500;\n        let lastResizeTime = Date.now();\n        function initializeBackground() {\n            canvas1 = document.getElementById(\"stars\");\n            canvas1.width = window.innerWidth;\n            canvas1.height = window.innerHeight;\n            window.addEventListener(\"resize\", function() {\n                if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {\n                    clearTimeout(resizeTimeout);\n                    resizeTimeout = null;\n                }\n                lastResizeTime = Date.now();\n                canvas1.style.display = \"none\";\n                resizeTimeout = setTimeout(function() {\n                    fadeIn(canvas1, 500);\n                    initializeStars();\n                }, 500);\n                canvas1.width = window.innerWidth;\n                canvas1.height = window.innerHeight;\n            });\n            initializeStars();\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n        }\n        let canvas1;\n        let stars = [];\n        function rand(max) {\n            return Math.random() * max;\n        }\n        function Star(canvas1, size, speed) {\n            this.ctx = canvas1.getContext(\"2d\");\n            this.size = size;\n            this.speed = speed;\n            this.x = rand(window.innerWidth);\n            this.y = rand(window.innerHeight);\n        }\n        Star.prototype.animate = function(delta) {\n            this.x += this.speed * delta;\n            this.y -= this.speed * delta;\n            if (this.y < 0) {\n                this.y = window.innerHeight;\n            }\n            if (this.x > window.innerWidth) {\n                this.x = 0;\n            }\n            this.ctx.fillStyle = \"#ffffff\";\n            this.ctx.fillRect(this.x, this.y, this.size, this.size);\n        };\n        function initializeStars() {\n            let winArea = window.innerWidth * window.innerHeight;\n            let smallStarsDensity = 0.0001;\n            let mediumStarsDensity = 0.00005;\n            let largeStarsDensity = 0.00002;\n            let smallStarsCount = winArea * smallStarsDensity;\n            let mediumStarsCount = winArea * mediumStarsDensity;\n            let largeStarsCount = winArea * largeStarsDensity;\n            stars = [];\n            for(let i = 0; i < smallStarsCount; i++){\n                stars.push(new Star(canvas1, 1, 30));\n            }\n            for(let i = 0; i < mediumStarsCount; i++){\n                stars.push(new Star(canvas1, 2, 20));\n            }\n            for(let i = 0; i < largeStarsCount; i++){\n                stars.push(new Star(canvas1, 3, 10));\n            }\n        }\n        function drawStars(delta) {\n            for(let i = 0; i < stars.length; i++){\n                stars[i].animate(delta);\n            }\n        }\n        let ms = 16;\n        let lastPaintTime = 0;\n        function paintLoop(timestamp) {\n            canvas1.getContext(\"2d\").clearRect(0, 0, canvas1.width, canvas1.height);\n            let delta = (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;\n            if (delta > 0.05) {\n                delta = 0.05;\n            }\n            drawStars(delta);\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n            lastPaintTime = timestamp;\n        }\n        function fadeIn(element, duration, callback) {\n            element.style.opacity = 0;\n            element.style.display = \"block\";\n            let startTime = Date.now();\n            let tick = function() {\n                let newOpacity = (Date.now() - startTime) / duration;\n                if (newOpacity > 1) {\n                    newOpacity = 1;\n                    callback && callback();\n                } else {\n                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n                }\n                element.style.opacity = newOpacity;\n            };\n            tick();\n        }\n        //http://youmightnotneedjquery.com/\n        function ready(fn) {\n            if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n                fn();\n            } else {\n                document.addEventListener(\"DOMContentLoaded\", fn);\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            canvas = document.getElementById(\"stars\");\n            if (canvas) starsBackground();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"stars\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\Stars\\\\Stars.jsx\",\n        lineNumber: 150,\n        columnNumber: 10\n    }, this);\n}\n_s(Stars, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Stars;\nvar _c;\n$RefreshReg$(_c, \"Stars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YXJzL1N0YXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFN0IsU0FBU0U7O0lBQ3RCLFNBQVNDO1FBQ1BDLE1BQU07WUFDSkM7UUFDRjtRQUVBLElBQUlDO1FBQ0osSUFBSUMsaUJBQWlCO1FBQ3JCLElBQUlDLGlCQUFpQkMsS0FBS0MsR0FBRztRQUU3QixTQUFTTDtZQUNQTSxVQUFTQyxTQUFTQyxjQUFjLENBQUM7WUFDakNGLFFBQU9HLEtBQUssR0FBR0MsT0FBT0MsVUFBVTtZQUNoQ0wsUUFBT00sTUFBTSxHQUFHRixPQUFPRyxXQUFXO1lBQ2xDSCxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNoQyxJQUFJVixLQUFLQyxHQUFHLEtBQUtGLGlCQUFpQkQsa0JBQWtCRCxlQUFlO29CQUNqRWMsYUFBYWQ7b0JBQ2JBLGdCQUFnQjtnQkFDbEI7Z0JBRUFFLGlCQUFpQkMsS0FBS0MsR0FBRztnQkFDekJDLFFBQU9VLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dCQUN2QmhCLGdCQUFnQmlCLFdBQVc7b0JBQ3pCQyxPQUFPYixTQUFRO29CQUNmYztnQkFDRixHQUFHO2dCQUNIZCxRQUFPRyxLQUFLLEdBQUdDLE9BQU9DLFVBQVU7Z0JBQ2hDTCxRQUFPTSxNQUFNLEdBQUdGLE9BQU9HLFdBQVc7WUFDcEM7WUFDQU87WUFDQ1YsT0FBT1cscUJBQXFCLElBQUlBLHNCQUFzQkMsY0FDckRKLFdBQVdJLFdBQVdDO1FBQzFCO1FBRUEsSUFBSWpCO1FBQ0osSUFBSWtCLFFBQVEsRUFBRTtRQUVkLFNBQVNDLEtBQUtDLEdBQUc7WUFDZixPQUFPQyxLQUFLQyxNQUFNLEtBQUtGO1FBQ3pCO1FBRUEsU0FBU0csS0FBS3ZCLE9BQU0sRUFBRXdCLElBQUksRUFBRUMsS0FBSztZQUMvQixJQUFJLENBQUNDLEdBQUcsR0FBRzFCLFFBQU8yQixVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDSCxJQUFJ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LEtBQUtzRCxTQUFRLElBQUtIO2dCQUM1QyxJQUFJSyxhQUFhLEdBQUc7b0JBQ2xCQSxhQUFhO29CQUNiSixZQUFZQTtnQkFDZCxPQUFPO29CQUNKL0MsT0FBT1cscUJBQXFCLElBQUlBLHNCQUFzQnVDLFNBQ3JEMUMsV0FBVzBDLE1BQU07Z0JBQ3JCO2dCQUVBTCxRQUFRdkMsS0FBSyxDQUFDMEMsT0FBTyxHQUFHRztZQUMxQjtZQUNBRDtRQUNGO1FBRUEsbUNBQW1DO1FBQ25DLFNBQVM3RCxNQUFNK0QsRUFBRTtZQUNmLElBQ0V2RCxTQUFTd0QsV0FBVyxHQUNoQnhELFNBQVN5RCxVQUFVLEtBQUssYUFDeEJ6RCxTQUFTeUQsVUFBVSxLQUFLLFdBQzVCO2dCQUNBRjtZQUNGLE9BQU87Z0JBQ0x2RCxTQUFTTyxnQkFBZ0IsQ0FBQyxvQkFBb0JnRDtZQUNoRDtRQUNGO0lBQ0Y7SUFFQW5FLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxJQUE2QixFQUFFO1lBQ2pDVyxTQUFTQyxTQUFTQyxjQUFjLENBQUM7WUFFakMsSUFBSUYsUUFBUVI7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDUTtRQUFPMkQsSUFBRzs7Ozs7O0FBQ3BCO0dBcEp3QnBFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1N0YXJzL1N0YXJzLmpzeD9lODBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJzKCkge1xyXG4gIGZ1bmN0aW9uIHN0YXJzQmFja2dyb3VuZCgpIHtcclxuICAgIHJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5pdGlhbGl6ZUJhY2tncm91bmQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCByZXNpemVUaW1lb3V0O1xyXG4gICAgbGV0IHJlc2l6ZUNvb2xkb3duID0gNTAwO1xyXG4gICAgbGV0IGxhc3RSZXNpemVUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQmFja2dyb3VuZCgpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyc1wiKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RSZXNpemVUaW1lIDwgcmVzaXplQ29vbGRvd24gJiYgcmVzaXplVGltZW91dCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgcmVzaXplVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0UmVzaXplVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBmYWRlSW4oY2FudmFzLCA1MDApO1xyXG4gICAgICAgICAgaW5pdGlhbGl6ZVN0YXJzKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9KTtcclxuICAgICAgaW5pdGlhbGl6ZVN0YXJzKCk7XHJcbiAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShwYWludExvb3ApKSB8fFxyXG4gICAgICAgIHNldFRpbWVvdXQocGFpbnRMb29wLCBtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBzdGFycyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmQobWF4KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFN0YXIoY2FudmFzLCBzaXplLCBzcGVlZCkge1xyXG4gICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgdGhpcy54ID0gcmFuZCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIHRoaXMueSA9IHJhbmQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBTdGFyLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgIGlmICh0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVTdGFycygpIHtcclxuICAgICAgbGV0IHdpbkFyZWEgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgbGV0IHNtYWxsU3RhcnNEZW5zaXR5ID0gMC4wMDAxO1xyXG4gICAgICBsZXQgbWVkaXVtU3RhcnNEZW5zaXR5ID0gMC4wMDAwNTtcclxuICAgICAgbGV0IGxhcmdlU3RhcnNEZW5zaXR5ID0gMC4wMDAwMjtcclxuICAgICAgbGV0IHNtYWxsU3RhcnNDb3VudCA9IHdpbkFyZWEgKiBzbWFsbFN0YXJzRGVuc2l0eTtcclxuICAgICAgbGV0IG1lZGl1bVN0YXJzQ291bnQgPSB3aW5BcmVhICogbWVkaXVtU3RhcnNEZW5zaXR5O1xyXG4gICAgICBsZXQgbGFyZ2VTdGFyc0NvdW50ID0gd2luQXJlYSAqIGxhcmdlU3RhcnNEZW5zaXR5O1xyXG4gICAgICBzdGFycyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNtYWxsU3RhcnNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDEsIDMwKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaXVtU3RhcnNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDIsIDIwKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFyZ2VTdGFyc0NvdW50OyBpKyspIHtcclxuICAgICAgICBzdGFycy5wdXNoKG5ldyBTdGFyKGNhbnZhcywgMywgMTApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdTdGFycyhkZWx0YSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RhcnNbaV0uYW5pbWF0ZShkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgbXMgPSAxNjtcclxuICAgIGxldCBsYXN0UGFpbnRUaW1lID0gMDtcclxuICAgIGZ1bmN0aW9uIHBhaW50TG9vcCh0aW1lc3RhbXApIHtcclxuICAgICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKS5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgbGV0IGRlbHRhID1cclxuICAgICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRpbWVzdGFtcCAtIGxhc3RQYWludFRpbWUgOiBtcykgLyAxMDAwO1xyXG4gICAgICBpZiAoZGVsdGEgPiAwLjA1KSB7XHJcbiAgICAgICAgZGVsdGEgPSAwLjA1O1xyXG4gICAgICB9XHJcbiAgICAgIGRyYXdTdGFycyhkZWx0YSk7XHJcbiAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShwYWludExvb3ApKSB8fFxyXG4gICAgICAgIHNldFRpbWVvdXQocGFpbnRMb29wLCBtcyk7XHJcbiAgICAgIGxhc3RQYWludFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmFkZUluKGVsZW1lbnQsIGR1cmF0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgbGV0IHRpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5ld09wYWNpdHkgPSAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbjtcclxuICAgICAgICBpZiAobmV3T3BhY2l0eSA+IDEpIHtcclxuICAgICAgICAgIG5ld09wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spKSB8fFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpY2ssIDE2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG5ld09wYWNpdHk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tL1xyXG4gICAgZnVuY3Rpb24gcmVhZHkoZm4pIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50XHJcbiAgICAgICAgICA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIlxyXG4gICAgICAgICAgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIlxyXG4gICAgICApIHtcclxuICAgICAgICBmbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnNcIik7XHJcblxyXG4gICAgICBpZiAoY2FudmFzKSBzdGFyc0JhY2tncm91bmQoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8Y2FudmFzIGlkPVwic3RhcnNcIj48L2NhbnZhcz47XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RhcnMiLCJzdGFyc0JhY2tncm91bmQiLCJyZWFkeSIsImluaXRpYWxpemVCYWNrZ3JvdW5kIiwicmVzaXplVGltZW91dCIsInJlc2l6ZUNvb2xkb3duIiwibGFzdFJlc2l6ZVRpbWUiLCJEYXRlIiwibm93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJmYWRlSW4iLCJpbml0aWFsaXplU3RhcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYWludExvb3AiLCJtcyIsInN0YXJzIiwicmFuZCIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJTdGFyIiwic2l6ZSIsInNwZWVkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIngiLCJ5IiwicHJvdG90eXBlIiwiYW5pbWF0ZSIsImRlbHRhIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aW5BcmVhIiwic21hbGxTdGFyc0RlbnNpdHkiLCJtZWRpdW1TdGFyc0RlbnNpdHkiLCJsYXJnZVN0YXJzRGVuc2l0eSIsInNtYWxsU3RhcnNDb3VudCIsIm1lZGl1bVN0YXJzQ291bnQiLCJsYXJnZVN0YXJzQ291bnQiLCJpIiwicHVzaCIsImRyYXdTdGFycyIsImxlbmd0aCIsImxhc3RQYWludFRpbWUiLCJ0aW1lc3RhbXAiLCJjbGVhclJlY3QiLCJlbGVtZW50IiwiZHVyYXRpb24iLCJjYWxsYmFjayIsIm9wYWNpdHkiLCJzdGFydFRpbWUiLCJ0aWNrIiwibmV3T3BhY2l0eSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stars/Stars.jsx\n"));

/***/ })

});