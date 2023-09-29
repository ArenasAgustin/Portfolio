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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Stars() {\n    _s();\n    function starsBackground() {\n        let resizeTimeout;\n        let resizeCooldown = 500;\n        let lastResizeTime = Date.now();\n        let canvas1;\n        let stars = [];\n        let ms = 16;\n        let lastPaintTime = 0;\n        function initializeBackground() {\n            canvas1 = document.getElementById(\"stars\");\n            canvas1.width = window.innerWidth;\n            canvas1.height = window.innerHeight;\n            window.addEventListener(\"resize\", function() {\n                if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {\n                    clearTimeout(resizeTimeout);\n                    resizeTimeout = null;\n                }\n                lastResizeTime = Date.now();\n                canvas1.style.display = \"none\";\n                resizeTimeout = setTimeout(function() {\n                    fadeIn(canvas1, 500);\n                    initializeStars();\n                }, 500);\n                canvas1.width = window.innerWidth;\n                canvas1.height = window.innerHeight;\n            });\n            initializeStars();\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n        }\n        function rand(max) {\n            return Math.random() * max;\n        }\n        function Star(canvas1, size, speed) {\n            this.ctx = canvas1.getContext(\"2d\");\n            this.size = size;\n            this.speed = speed;\n            this.x = rand(window.innerWidth);\n            this.y = rand(window.innerHeight);\n        }\n        Star.prototype.animate = function(delta) {\n            this.x += this.speed * delta;\n            this.y -= this.speed * delta;\n            if (this.y < 0) this.y = window.innerHeight;\n            if (this.x > window.innerWidth) this.x = 0;\n            this.ctx.fillStyle = \"#ffffff\";\n            this.ctx.fillRect(this.x, this.y, this.size, this.size);\n        };\n        function initializeStars() {\n            let winArea = window.innerWidth * window.innerHeight;\n            let smallStarsDensity = 0.0001;\n            let mediumStarsDensity = 0.00005;\n            let largeStarsDensity = 0.00002;\n            let smallStarsCount = winArea * smallStarsDensity;\n            let mediumStarsCount = winArea * mediumStarsDensity;\n            let largeStarsCount = winArea * largeStarsDensity;\n            stars = [];\n            for(let i = 0; i < smallStarsCount; i++)stars.push(new Star(canvas1, 1, 30));\n            for(let i = 0; i < mediumStarsCount; i++)stars.push(new Star(canvas1, 2, 20));\n            for(let i = 0; i < largeStarsCount; i++)stars.push(new Star(canvas1, 3, 10));\n        }\n        function drawStars(delta) {\n            for(let i = 0; i < stars.length; i++)stars[i].animate(delta);\n        }\n        function paintLoop(timestamp) {\n            canvas1.getContext(\"2d\").clearRect(0, 0, canvas1.width, canvas1.height);\n            let delta = (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;\n            if (delta > 0.05) delta = 0.05;\n            drawStars(delta);\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n            lastPaintTime = timestamp;\n        }\n        function fadeIn(element, duration, callback) {\n            element.style.opacity = 0;\n            element.style.display = \"block\";\n            let startTime = Date.now();\n            let tick = function() {\n                let newOpacity = (Date.now() - startTime) / duration;\n                if (newOpacity > 1) {\n                    newOpacity = 1;\n                    callback && callback();\n                } else {\n                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n                }\n                element.style.opacity = newOpacity;\n            };\n            tick();\n        }\n        //http://youmightnotneedjquery.com/\n        function ready(fn) {\n            if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n                fn();\n            } else {\n                document.addEventListener(\"DOMContentLoaded\", fn);\n            }\n        }\n        ready(function() {\n            initializeBackground();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            canvas = document.getElementById(\"stars\");\n            if (canvas) starsBackground();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"stars\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\Stars\\\\Stars.jsx\",\n        lineNumber: 154,\n        columnNumber: 10\n    }, this);\n}\n_s(Stars, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Stars;\nvar _c;\n$RefreshReg$(_c, \"Stars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YXJzL1N0YXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFN0IsU0FBU0U7O0lBQ3RCLFNBQVNDO1FBQ1AsSUFBSUM7UUFDSixJQUFJQyxpQkFBaUI7UUFDckIsSUFBSUMsaUJBQWlCQyxLQUFLQyxHQUFHO1FBQzdCLElBQUlDO1FBQ0osSUFBSUMsUUFBUSxFQUFFO1FBQ2QsSUFBSUMsS0FBSztRQUNULElBQUlDLGdCQUFnQjtRQUVwQixTQUFTQztZQUNQSixVQUFTSyxTQUFTQyxjQUFjLENBQUM7WUFDakNOLFFBQU9PLEtBQUssR0FBR0MsT0FBT0MsVUFBVTtZQUNoQ1QsUUFBT1UsTUFBTSxHQUFHRixPQUFPRyxXQUFXO1lBRWxDSCxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNoQyxJQUFJZCxLQUFLQyxHQUFHLEtBQUtGLGlCQUFpQkQsa0JBQWtCRCxlQUFlO29CQUNqRWtCLGFBQWFsQjtvQkFDYkEsZ0JBQWdCO2dCQUNsQjtnQkFFQUUsaUJBQWlCQyxLQUFLQyxHQUFHO2dCQUN6QkMsUUFBT2MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7Z0JBRXZCcEIsZ0JBQWdCcUIsV0FBVztvQkFDekJDLE9BQU9qQixTQUFRO29CQUNma0I7Z0JBQ0YsR0FBRztnQkFFSGxCLFFBQU9PLEtBQUssR0FBR0MsT0FBT0MsVUFBVTtnQkFDaENULFFBQU9VLE1BQU0sR0FBR0YsT0FBT0csV0FBVztZQUNwQztZQUVBTztZQUNDVixPQUFPVyxxQkFBcUIsSUFBSUEsc0JBQXNCQyxjQUNyREosV0FBV0ksV0FBV2xCO1FBQzFCO1FBRUEsU0FBU21CLEtBQUtDLEdBQUc7WUFDZixPQUFPQyxLQUFLQyxNQUFNLEtBQUtGO1FBQ3pCO1FBRUEsU0FBU0csS0FBS3pCLE9BQU0sRUFBRTBCLElBQUksRUFBRUMsS0FBSztZQUMvQixJQUFJLENBQUNDLEdBQUcsR0FBRzVCLFFBQU82QixVQUFVLENBQUM7WUFD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QXFCLElBQUlBLHNCQUFzQm9DLFNBQ3JEdkMsV0FBV3VDLE1BQU07Z0JBQ3JCO2dCQUVBTCxRQUFRcEMsS0FBSyxDQUFDdUMsT0FBTyxHQUFHRztZQUMxQjtZQUVBRDtRQUNGO1FBRUEsbUNBQW1DO1FBQ25DLFNBQVNFLE1BQU1DLEVBQUU7WUFDZixJQUNFckQsU0FBU3NELFdBQVcsR0FDaEJ0RCxTQUFTdUQsVUFBVSxLQUFLLGFBQ3hCdkQsU0FBU3VELFVBQVUsS0FBSyxXQUM1QjtnQkFDQUY7WUFDRixPQUFPO2dCQUNMckQsU0FBU08sZ0JBQWdCLENBQUMsb0JBQW9COEM7WUFDaEQ7UUFDRjtRQUVBRCxNQUFNO1lBQ0pyRDtRQUNGO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQTZCLEVBQUU7WUFDakNTLFNBQVNLLFNBQVNDLGNBQWMsQ0FBQztZQUVqQyxJQUFJTixRQUFRTjtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNNO1FBQU82RCxJQUFHOzs7Ozs7QUFDcEI7R0F4SndCcEU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU3RhcnMvU3RhcnMuanN4P2U4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnMoKSB7XHJcbiAgZnVuY3Rpb24gc3RhcnNCYWNrZ3JvdW5kKCkge1xyXG4gICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XHJcbiAgICBsZXQgcmVzaXplQ29vbGRvd24gPSA1MDA7XHJcbiAgICBsZXQgbGFzdFJlc2l6ZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBzdGFycyA9IFtdO1xyXG4gICAgbGV0IG1zID0gMTY7XHJcbiAgICBsZXQgbGFzdFBhaW50VGltZSA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJhY2tncm91bmQoKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnNcIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJlc2l6ZVRpbWUgPCByZXNpemVDb29sZG93biAmJiByZXNpemVUaW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgICByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RSZXNpemVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBmYWRlSW4oY2FudmFzLCA1MDApO1xyXG4gICAgICAgICAgaW5pdGlhbGl6ZVN0YXJzKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbml0aWFsaXplU3RhcnMoKTtcclxuICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50TG9vcCkpIHx8XHJcbiAgICAgICAgc2V0VGltZW91dChwYWludExvb3AsIG1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kKG1heCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIG1heDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTdGFyKGNhbnZhcywgc2l6ZSwgc3BlZWQpIHtcclxuICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgIHRoaXMueCA9IHJhbmQod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB0aGlzLnkgPSByYW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3Rhci5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG5cclxuICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkgdGhpcy54ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplU3RhcnMoKSB7XHJcbiAgICAgIGxldCB3aW5BcmVhID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGxldCBzbWFsbFN0YXJzRGVuc2l0eSA9IDAuMDAwMTtcclxuICAgICAgbGV0IG1lZGl1bVN0YXJzRGVuc2l0eSA9IDAuMDAwMDU7XHJcbiAgICAgIGxldCBsYXJnZVN0YXJzRGVuc2l0eSA9IDAuMDAwMDI7XHJcbiAgICAgIGxldCBzbWFsbFN0YXJzQ291bnQgPSB3aW5BcmVhICogc21hbGxTdGFyc0RlbnNpdHk7XHJcbiAgICAgIGxldCBtZWRpdW1TdGFyc0NvdW50ID0gd2luQXJlYSAqIG1lZGl1bVN0YXJzRGVuc2l0eTtcclxuICAgICAgbGV0IGxhcmdlU3RhcnNDb3VudCA9IHdpbkFyZWEgKiBsYXJnZVN0YXJzRGVuc2l0eTtcclxuICAgICAgc3RhcnMgPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc21hbGxTdGFyc0NvdW50OyBpKyspXHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDEsIDMwKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGl1bVN0YXJzQ291bnQ7IGkrKylcclxuICAgICAgICBzdGFycy5wdXNoKG5ldyBTdGFyKGNhbnZhcywgMiwgMjApKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFyZ2VTdGFyc0NvdW50OyBpKyspXHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDMsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1N0YXJzKGRlbHRhKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnMubGVuZ3RoOyBpKyspIHN0YXJzW2ldLmFuaW1hdGUoZGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhaW50TG9vcCh0aW1lc3RhbXApIHtcclxuICAgICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKS5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGxldCBkZWx0YSA9XHJcbiAgICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0aW1lc3RhbXAgLSBsYXN0UGFpbnRUaW1lIDogbXMpIC8gMTAwMDtcclxuXHJcbiAgICAgIGlmIChkZWx0YSA+IDAuMDUpIGRlbHRhID0gMC4wNTtcclxuXHJcbiAgICAgIGRyYXdTdGFycyhkZWx0YSk7XHJcblxyXG4gICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGFpbnRMb29wKSkgfHxcclxuICAgICAgICBzZXRUaW1lb3V0KHBhaW50TG9vcCwgbXMpO1xyXG5cclxuICAgICAgbGFzdFBhaW50VGltZSA9IHRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCwgZHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgbGV0IHRpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5ld09wYWNpdHkgPSAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKG5ld09wYWNpdHkgPiAxKSB7XHJcbiAgICAgICAgICBuZXdPcGFjaXR5ID0gMTtcclxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKSkgfHxcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aWNrLCAxNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBuZXdPcGFjaXR5O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vXHJcbiAgICBmdW5jdGlvbiByZWFkeShmbikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnRcclxuICAgICAgICAgID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiXHJcbiAgICAgICAgICA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbml0aWFsaXplQmFja2dyb3VuZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyc1wiKTtcclxuXHJcbiAgICAgIGlmIChjYW52YXMpIHN0YXJzQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxjYW52YXMgaWQ9XCJzdGFyc1wiPjwvY2FudmFzPjtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdGFycyIsInN0YXJzQmFja2dyb3VuZCIsInJlc2l6ZVRpbWVvdXQiLCJyZXNpemVDb29sZG93biIsImxhc3RSZXNpemVUaW1lIiwiRGF0ZSIsIm5vdyIsImNhbnZhcyIsInN0YXJzIiwibXMiLCJsYXN0UGFpbnRUaW1lIiwiaW5pdGlhbGl6ZUJhY2tncm91bmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImZhZGVJbiIsImluaXRpYWxpemVTdGFycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhaW50TG9vcCIsInJhbmQiLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiU3RhciIsInNpemUiLCJzcGVlZCIsImN0eCIsImdldENvbnRleHQiLCJ4IiwieSIsInByb3RvdHlwZSIsImFuaW1hdGUiLCJkZWx0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2luQXJlYSIsInNtYWxsU3RhcnNEZW5zaXR5IiwibWVkaXVtU3RhcnNEZW5zaXR5IiwibGFyZ2VTdGFyc0RlbnNpdHkiLCJzbWFsbFN0YXJzQ291bnQiLCJtZWRpdW1TdGFyc0NvdW50IiwibGFyZ2VTdGFyc0NvdW50IiwiaSIsInB1c2giLCJkcmF3U3RhcnMiLCJsZW5ndGgiLCJ0aW1lc3RhbXAiLCJjbGVhclJlY3QiLCJlbGVtZW50IiwiZHVyYXRpb24iLCJjYWxsYmFjayIsIm9wYWNpdHkiLCJzdGFydFRpbWUiLCJ0aWNrIiwibmV3T3BhY2l0eSIsInJlYWR5IiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stars/Stars.jsx\n"));

/***/ })

});