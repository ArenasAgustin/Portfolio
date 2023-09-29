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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Stars() {\n    _s();\n    function starsBackground() {\n        let resizeTimeout;\n        let resizeCooldown = 500;\n        let lastResizeTime = Date.now();\n        let canvas1;\n        let stars = [];\n        function initializeBackground() {\n            canvas1 = document.getElementById(\"stars\");\n            canvas1.width = window.innerWidth;\n            canvas1.height = window.innerHeight;\n            window.addEventListener(\"resize\", function() {\n                if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {\n                    clearTimeout(resizeTimeout);\n                    resizeTimeout = null;\n                }\n                lastResizeTime = Date.now();\n                canvas1.style.display = \"none\";\n                resizeTimeout = setTimeout(function() {\n                    fadeIn(canvas1, 500);\n                    initializeStars();\n                }, 500);\n                canvas1.width = window.innerWidth;\n                canvas1.height = window.innerHeight;\n            });\n            initializeStars();\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n        }\n        function rand(max) {\n            return Math.random() * max;\n        }\n        function Star(canvas1, size, speed) {\n            this.ctx = canvas1.getContext(\"2d\");\n            this.size = size;\n            this.speed = speed;\n            this.x = rand(window.innerWidth);\n            this.y = rand(window.innerHeight);\n        }\n        Star.prototype.animate = function(delta) {\n            this.x += this.speed * delta;\n            this.y -= this.speed * delta;\n            if (this.y < 0) {\n                this.y = window.innerHeight;\n            }\n            if (this.x > window.innerWidth) {\n                this.x = 0;\n            }\n            this.ctx.fillStyle = \"#ffffff\";\n            this.ctx.fillRect(this.x, this.y, this.size, this.size);\n        };\n        function initializeStars() {\n            let winArea = window.innerWidth * window.innerHeight;\n            let smallStarsDensity = 0.0001;\n            let mediumStarsDensity = 0.00005;\n            let largeStarsDensity = 0.00002;\n            let smallStarsCount = winArea * smallStarsDensity;\n            let mediumStarsCount = winArea * mediumStarsDensity;\n            let largeStarsCount = winArea * largeStarsDensity;\n            stars = [];\n            for(let i = 0; i < smallStarsCount; i++){\n                stars.push(new Star(canvas1, 1, 30));\n            }\n            for(let i = 0; i < mediumStarsCount; i++){\n                stars.push(new Star(canvas1, 2, 20));\n            }\n            for(let i = 0; i < largeStarsCount; i++){\n                stars.push(new Star(canvas1, 3, 10));\n            }\n        }\n        function drawStars(delta) {\n            for(let i = 0; i < stars.length; i++){\n                stars[i].animate(delta);\n            }\n        }\n        let ms = 16;\n        let lastPaintTime = 0;\n        function paintLoop(timestamp) {\n            canvas1.getContext(\"2d\").clearRect(0, 0, canvas1.width, canvas1.height);\n            let delta = (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;\n            if (delta > 0.05) {\n                delta = 0.05;\n            }\n            drawStars(delta);\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n            lastPaintTime = timestamp;\n        }\n        function fadeIn(element, duration, callback) {\n            element.style.opacity = 0;\n            element.style.display = \"block\";\n            let startTime = Date.now();\n            let tick = function() {\n                let newOpacity = (Date.now() - startTime) / duration;\n                if (newOpacity > 1) {\n                    newOpacity = 1;\n                    callback && callback();\n                } else {\n                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n                }\n                element.style.opacity = newOpacity;\n            };\n            tick();\n        }\n        //http://youmightnotneedjquery.com/\n        function ready(fn) {\n            if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n                fn();\n            } else {\n                document.addEventListener(\"DOMContentLoaded\", fn);\n            }\n        }\n        ready(function() {\n            initializeBackground();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            canvas = document.getElementById(\"stars\");\n            if (canvas) starsBackground();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"stars\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\Stars\\\\Stars.jsx\",\n        lineNumber: 149,\n        columnNumber: 10\n    }, this);\n}\n_s(Stars, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Stars;\nvar _c;\n$RefreshReg$(_c, \"Stars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YXJzL1N0YXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFN0IsU0FBU0U7O0lBQ3RCLFNBQVNDO1FBQ1AsSUFBSUM7UUFDSixJQUFJQyxpQkFBaUI7UUFDckIsSUFBSUMsaUJBQWlCQyxLQUFLQyxHQUFHO1FBQzdCLElBQUlDO1FBQ0osSUFBSUMsUUFBUSxFQUFFO1FBRWQsU0FBU0M7WUFDUEYsVUFBU0csU0FBU0MsY0FBYyxDQUFDO1lBQ2pDSixRQUFPSyxLQUFLLEdBQUdDLE9BQU9DLFVBQVU7WUFDaENQLFFBQU9RLE1BQU0sR0FBR0YsT0FBT0csV0FBVztZQUNsQ0gsT0FBT0ksZ0JBQWdCLENBQUMsVUFBVTtnQkFDaEMsSUFBSVosS0FBS0MsR0FBRyxLQUFLRixpQkFBaUJELGtCQUFrQkQsZUFBZTtvQkFDakVnQixhQUFhaEI7b0JBQ2JBLGdCQUFnQjtnQkFDbEI7Z0JBRUFFLGlCQUFpQkMsS0FBS0MsR0FBRztnQkFDekJDLFFBQU9ZLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dCQUN2QmxCLGdCQUFnQm1CLFdBQVc7b0JBQ3pCQyxPQUFPZixTQUFRO29CQUNmZ0I7Z0JBQ0YsR0FBRztnQkFDSGhCLFFBQU9LLEtBQUssR0FBR0MsT0FBT0MsVUFBVTtnQkFDaENQLFFBQU9RLE1BQU0sR0FBR0YsT0FBT0csV0FBVztZQUNwQztZQUNBTztZQUNDVixPQUFPVyxxQkFBcUIsSUFBSUEsc0JBQXNCQyxjQUNyREosV0FBV0ksV0FBV0M7UUFDMUI7UUFFQSxTQUFTQyxLQUFLQyxHQUFHO1lBQ2YsT0FBT0MsS0FBS0MsTUFBTSxLQUFLRjtRQUN6QjtRQUVBLFNBQVNHLEtBQUt4QixPQUFNLEVBQUV5QixJQUFJLEVBQUVDLEtBQUs7WUFDL0IsSUFBSSxDQUFDQyxHQUFHLEdBQUczQixRQUFPNEIsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQ0gsSUFBSSxHQUFHQTtZQUNaLElBQUksQ0FB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QUM1QyxJQUFJSyxhQUFhLEdBQUc7b0JBQ2xCQSxhQUFhO29CQUNiSixZQUFZQTtnQkFDZCxPQUFPO29CQUNKOUMsT0FBT1cscUJBQXFCLElBQUlBLHNCQUFzQnNDLFNBQ3JEekMsV0FBV3lDLE1BQU07Z0JBQ3JCO2dCQUVBTCxRQUFRdEMsS0FBSyxDQUFDeUMsT0FBTyxHQUFHRztZQUMxQjtZQUNBRDtRQUNGO1FBRUEsbUNBQW1DO1FBQ25DLFNBQVNFLE1BQU1DLEVBQUU7WUFDZixJQUNFdkQsU0FBU3dELFdBQVcsR0FDaEJ4RCxTQUFTeUQsVUFBVSxLQUFLLGFBQ3hCekQsU0FBU3lELFVBQVUsS0FBSyxXQUM1QjtnQkFDQUY7WUFDRixPQUFPO2dCQUNMdkQsU0FBU08sZ0JBQWdCLENBQUMsb0JBQW9CZ0Q7WUFDaEQ7UUFDRjtRQUVBRCxNQUFNO1lBQ0p2RDtRQUNGO0lBQ0Y7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQTZCLEVBQUU7WUFDakNTLFNBQVNHLFNBQVNDLGNBQWMsQ0FBQztZQUVqQyxJQUFJSixRQUFRTjtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNNO1FBQU82RCxJQUFHOzs7Ozs7QUFDcEI7R0FuSndCcEU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU3RhcnMvU3RhcnMuanN4P2U4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnMoKSB7XHJcbiAgZnVuY3Rpb24gc3RhcnNCYWNrZ3JvdW5kKCkge1xyXG4gICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XHJcbiAgICBsZXQgcmVzaXplQ29vbGRvd24gPSA1MDA7XHJcbiAgICBsZXQgbGFzdFJlc2l6ZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBzdGFycyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVCYWNrZ3JvdW5kKCkge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJzXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJlc2l6ZVRpbWUgPCByZXNpemVDb29sZG93biAmJiByZXNpemVUaW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgICByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RSZXNpemVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGZhZGVJbihjYW52YXMsIDUwMCk7XHJcbiAgICAgICAgICBpbml0aWFsaXplU3RhcnMoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbml0aWFsaXplU3RhcnMoKTtcclxuICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50TG9vcCkpIHx8XHJcbiAgICAgICAgc2V0VGltZW91dChwYWludExvb3AsIG1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kKG1heCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIG1heDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTdGFyKGNhbnZhcywgc2l6ZSwgc3BlZWQpIHtcclxuICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgIHRoaXMueCA9IHJhbmQod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB0aGlzLnkgPSByYW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3Rhci5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplU3RhcnMoKSB7XHJcbiAgICAgIGxldCB3aW5BcmVhID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGxldCBzbWFsbFN0YXJzRGVuc2l0eSA9IDAuMDAwMTtcclxuICAgICAgbGV0IG1lZGl1bVN0YXJzRGVuc2l0eSA9IDAuMDAwMDU7XHJcbiAgICAgIGxldCBsYXJnZVN0YXJzRGVuc2l0eSA9IDAuMDAwMDI7XHJcbiAgICAgIGxldCBzbWFsbFN0YXJzQ291bnQgPSB3aW5BcmVhICogc21hbGxTdGFyc0RlbnNpdHk7XHJcbiAgICAgIGxldCBtZWRpdW1TdGFyc0NvdW50ID0gd2luQXJlYSAqIG1lZGl1bVN0YXJzRGVuc2l0eTtcclxuICAgICAgbGV0IGxhcmdlU3RhcnNDb3VudCA9IHdpbkFyZWEgKiBsYXJnZVN0YXJzRGVuc2l0eTtcclxuICAgICAgc3RhcnMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbWFsbFN0YXJzQ291bnQ7IGkrKykge1xyXG4gICAgICAgIHN0YXJzLnB1c2gobmV3IFN0YXIoY2FudmFzLCAxLCAzMCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGl1bVN0YXJzQ291bnQ7IGkrKykge1xyXG4gICAgICAgIHN0YXJzLnB1c2gobmV3IFN0YXIoY2FudmFzLCAyLCAyMCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhcmdlU3RhcnNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDMsIDEwKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3U3RhcnMoZGVsdGEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0YXJzW2ldLmFuaW1hdGUoZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1zID0gMTY7XHJcbiAgICBsZXQgbGFzdFBhaW50VGltZSA9IDA7XHJcbiAgICBmdW5jdGlvbiBwYWludExvb3AodGltZXN0YW1wKSB7XHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIGxldCBkZWx0YSA9XHJcbiAgICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0aW1lc3RhbXAgLSBsYXN0UGFpbnRUaW1lIDogbXMpIC8gMTAwMDtcclxuICAgICAgaWYgKGRlbHRhID4gMC4wNSkge1xyXG4gICAgICAgIGRlbHRhID0gMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBkcmF3U3RhcnMoZGVsdGEpO1xyXG4gICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGFpbnRMb29wKSkgfHxcclxuICAgICAgICBzZXRUaW1lb3V0KHBhaW50TG9vcCwgbXMpO1xyXG4gICAgICBsYXN0UGFpbnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50LCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIGxldCB0aWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuZXdPcGFjaXR5ID0gKERhdGUubm93KCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XHJcbiAgICAgICAgaWYgKG5ld09wYWNpdHkgPiAxKSB7XHJcbiAgICAgICAgICBuZXdPcGFjaXR5ID0gMTtcclxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKSkgfHxcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aWNrLCAxNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBuZXdPcGFjaXR5O1xyXG4gICAgICB9O1xyXG4gICAgICB0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS9cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudFxyXG4gICAgICAgICAgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcclxuICAgICAgICAgIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZm4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGluaXRpYWxpemVCYWNrZ3JvdW5kKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJzXCIpO1xyXG5cclxuICAgICAgaWYgKGNhbnZhcykgc3RhcnNCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGNhbnZhcyBpZD1cInN0YXJzXCI+PC9jYW52YXM+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0YXJzIiwic3RhcnNCYWNrZ3JvdW5kIiwicmVzaXplVGltZW91dCIsInJlc2l6ZUNvb2xkb3duIiwibGFzdFJlc2l6ZVRpbWUiLCJEYXRlIiwibm93IiwiY2FudmFzIiwic3RhcnMiLCJpbml0aWFsaXplQmFja2dyb3VuZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwiaW5pdGlhbGl6ZVN0YXJzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGFpbnRMb29wIiwibXMiLCJyYW5kIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsIlN0YXIiLCJzaXplIiwic3BlZWQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJwcm90b3R5cGUiLCJhbmltYXRlIiwiZGVsdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpbkFyZWEiLCJzbWFsbFN0YXJzRGVuc2l0eSIsIm1lZGl1bVN0YXJzRGVuc2l0eSIsImxhcmdlU3RhcnNEZW5zaXR5Iiwic21hbGxTdGFyc0NvdW50IiwibWVkaXVtU3RhcnNDb3VudCIsImxhcmdlU3RhcnNDb3VudCIsImkiLCJwdXNoIiwiZHJhd1N0YXJzIiwibGVuZ3RoIiwibGFzdFBhaW50VGltZSIsInRpbWVzdGFtcCIsImNsZWFyUmVjdCIsImVsZW1lbnQiLCJkdXJhdGlvbiIsImNhbGxiYWNrIiwib3BhY2l0eSIsInN0YXJ0VGltZSIsInRpY2siLCJuZXdPcGFjaXR5IiwicmVhZHkiLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stars/Stars.jsx\n"));

/***/ })

});