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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Stars() {\n    _s();\n    function starsBackground() {\n        let resizeTimeout;\n        let resizeCooldown = 500;\n        let lastResizeTime = Date.now();\n        let canvas;\n        let stars = [];\n        let ms = 16;\n        let lastPaintTime = 0;\n        function rand(max) {\n            return Math.random() * max;\n        }\n        function Star(canvas, size, speed) {\n            this.ctx = canvas.getContext(\"2d\");\n            this.size = size;\n            this.speed = speed;\n            this.x = rand(window.innerWidth);\n            this.y = rand(window.innerHeight);\n        }\n        Star.prototype.animate = function(delta) {\n            this.x += this.speed * delta;\n            this.y -= this.speed * delta;\n            if (this.y < 0) this.y = window.innerHeight;\n            if (this.x > window.innerWidth) this.x = 0;\n            this.ctx.fillStyle = \"#ffffff\";\n            this.ctx.fillRect(this.x, this.y, this.size, this.size);\n        };\n        function initializeStars() {\n            let winArea = window.innerWidth * window.innerHeight;\n            let smallStarsDensity = 0.0001;\n            let mediumStarsDensity = 0.00005;\n            let largeStarsDensity = 0.00002;\n            let smallStarsCount = winArea * smallStarsDensity;\n            let mediumStarsCount = winArea * mediumStarsDensity;\n            let largeStarsCount = winArea * largeStarsDensity;\n            stars = [];\n            for(let i = 0; i < smallStarsCount; i++)stars.push(new Star(canvas, 1, 30));\n            for(let i = 0; i < mediumStarsCount; i++)stars.push(new Star(canvas, 2, 20));\n            for(let i = 0; i < largeStarsCount; i++)stars.push(new Star(canvas, 3, 10));\n            console.log(\"initialized stars\", stars);\n        }\n        function drawStars(delta) {\n            console.log(\"drawing stars\");\n            for(let i = 0; i < stars.length; i++)stars[i].animate(delta);\n        }\n        function paintLoop(timestamp) {\n            canvas.getContext(\"2d\").clearRect(0, 0, canvas.width, canvas.height);\n            console.log(\"painting\");\n            let delta = (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;\n            if (delta > 0.05) delta = 0.05;\n            drawStars(delta);\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n            lastPaintTime = timestamp;\n        }\n        function fadeIn(element, duration, callback) {\n            element.style.opacity = 0;\n            element.style.display = \"block\";\n            let startTime = Date.now();\n            console.log;\n            let tick = function() {\n                let newOpacity = (Date.now() - startTime) / duration;\n                if (newOpacity > 1) {\n                    newOpacity = 1;\n                    callback && callback();\n                } else {\n                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n                }\n                element.style.opacity = newOpacity;\n            };\n            tick();\n        }\n        function initializeBackground() {\n            canvas = document.getElementById(\"stars\");\n            canvas.width = window.innerWidth;\n            canvas.height = window.innerHeight;\n            console.log(\"initialized\");\n            window.addEventListener(\"resize\", function() {\n                if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {\n                    clearTimeout(resizeTimeout);\n                    resizeTimeout = null;\n                }\n                lastResizeTime = Date.now();\n                canvas.style.display = \"none\";\n                resizeTimeout = setTimeout(function() {\n                    fadeIn(canvas, 500);\n                    initializeStars();\n                    console.log(\"resized\");\n                }, 500);\n                canvas.width = window.innerWidth;\n                canvas.height = window.innerHeight;\n            });\n            initializeStars();\n            window.requestAnimationFrame && requestAnimationFrame(paintLoop) || setTimeout(paintLoop, ms);\n        }\n        //http://youmightnotneedjquery.com/\n        function ready(fn) {\n            if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n                fn();\n                console.log(\"ready\");\n            } else {\n                document.addEventListener(\"DOMContentLoaded\", fn);\n            }\n        }\n        ready(function() {\n            initializeBackground();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            let canvas = document.getElementById(\"stars\");\n            if (canvas) starsBackground();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"stars\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\Stars\\\\Stars.jsx\",\n        lineNumber: 165,\n        columnNumber: 10\n    }, this);\n}\n_s(Stars, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Stars;\nvar _c;\n$RefreshReg$(_c, \"Stars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YXJzL1N0YXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFN0IsU0FBU0U7O0lBQ3RCLFNBQVNDO1FBQ1AsSUFBSUM7UUFDSixJQUFJQyxpQkFBaUI7UUFDckIsSUFBSUMsaUJBQWlCQyxLQUFLQyxHQUFHO1FBQzdCLElBQUlDO1FBQ0osSUFBSUMsUUFBUSxFQUFFO1FBQ2QsSUFBSUMsS0FBSztRQUNULElBQUlDLGdCQUFnQjtRQUVwQixTQUFTQyxLQUFLQyxHQUFHO1lBQ2YsT0FBT0MsS0FBS0MsTUFBTSxLQUFLRjtRQUN6QjtRQUVBLFNBQVNHLEtBQUtSLE1BQU0sRUFBRVMsSUFBSSxFQUFFQyxLQUFLO1lBQy9CLElBQUksQ0FBQ0MsR0FBRyxHQUFHWCxPQUFPWSxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDSCxJQUFJLEdBQUdBO1lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1lBQ2IsSUFBSSxDQUFDRyxDQUFDLEdBQUdULEtBQUtVLE9BQU9DLFVBQVU7WUFDL0IsSUFBSSxDQUFDQyxDQUFDLEdBQUdaLEtBQUtVLE9BQU9HLFdBQVc7UUFDbEM7UUFFQVQsS0FBS1UsU0FBUyxDQUFDQyxPQUFPLEdBQUcsU0FBVUMsS0FBSztZQUN0QyxJQUFJLENBQUNQLENBQUMsSUFBSSxJQUFJLENBQUNILEtBQUssR0FBR1U7WUFDdkIsSUFBSSxDQUFDSixDQUFDLElBQUksSUFBSSxDQUFDTixLQUFLLEdBQUdVO1lBRXZCLElBQUksSUFBSSxDQUFDSixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBR0YsT0FBT0csV0FBVztZQUUzQyxJQUFJLElBQUksQ0FBQ0osQ0FBQyxHQUFHQyxPQUFPQyxVQUFVLEVBQUUsSUFBSSxDQUFDRixDQUFDLEdBQUc7WUFFekMsSUFBSSxDQUFDRixHQUFHLENBQUNVLFNBQVMsR0FBRztZQUNyQixJQUFJLENBQUNWLEdBQUcsQ0FBQ1csUUFB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QUV2QnZELGdCQUFnQmdELFdBQVc7b0JBQ3pCQyxPQUFPNUMsUUFBUTtvQkFDZnVCO29CQUNBVSxRQUFRQyxHQUFHLENBQUM7Z0JBQ2QsR0FBRztnQkFFSGxDLE9BQU93QyxLQUFLLEdBQUcxQixPQUFPQyxVQUFVO2dCQUNoQ2YsT0FBT3lDLE1BQU0sR0FBRzNCLE9BQU9HLFdBQVc7WUFDcEM7WUFFQU07WUFDQ1QsT0FBTzRCLHFCQUFxQixJQUFJQSxzQkFBc0JMLGNBQ3JETSxXQUFXTixXQUFXbkM7UUFDMUI7UUFFQSxtQ0FBbUM7UUFDbkMsU0FBU3lELE1BQU1DLEVBQUU7WUFDZixJQUNFTCxTQUFTTSxXQUFXLEdBQ2hCTixTQUFTTyxVQUFVLEtBQUssYUFDeEJQLFNBQVNPLFVBQVUsS0FBSyxXQUM1QjtnQkFDQUY7Z0JBQ0EzQixRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPO2dCQUNMcUIsU0FBU0UsZ0JBQWdCLENBQUMsb0JBQW9CRztZQUNoRDtRQUNGO1FBRUFELE1BQU07WUFDSkw7UUFDRjtJQUNGO0lBRUEvRCxnREFBU0EsQ0FBQztRQUNSLElBQUksSUFBNkIsRUFBRTtZQUNqQyxJQUFJUyxTQUFTdUQsU0FBU0MsY0FBYyxDQUFDO1lBRXJDLElBQUl4RCxRQUFRTjtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNNO1FBQU8rRCxJQUFHOzs7Ozs7QUFDcEI7R0FuS3dCdEU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU3RhcnMvU3RhcnMuanN4P2U4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnMoKSB7XHJcbiAgZnVuY3Rpb24gc3RhcnNCYWNrZ3JvdW5kKCkge1xyXG4gICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XHJcbiAgICBsZXQgcmVzaXplQ29vbGRvd24gPSA1MDA7XHJcbiAgICBsZXQgbGFzdFJlc2l6ZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBzdGFycyA9IFtdO1xyXG4gICAgbGV0IG1zID0gMTY7XHJcbiAgICBsZXQgbGFzdFBhaW50VGltZSA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZChtYXgpIHtcclxuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU3RhcihjYW52YXMsIHNpemUsIHNwZWVkKSB7XHJcbiAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICB0aGlzLnggPSByYW5kKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgdGhpcy55ID0gcmFuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXIucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGgpIHRoaXMueCA9IDA7XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0YXJzKCkge1xyXG4gICAgICBsZXQgd2luQXJlYSA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBsZXQgc21hbGxTdGFyc0RlbnNpdHkgPSAwLjAwMDE7XHJcbiAgICAgIGxldCBtZWRpdW1TdGFyc0RlbnNpdHkgPSAwLjAwMDA1O1xyXG4gICAgICBsZXQgbGFyZ2VTdGFyc0RlbnNpdHkgPSAwLjAwMDAyO1xyXG4gICAgICBsZXQgc21hbGxTdGFyc0NvdW50ID0gd2luQXJlYSAqIHNtYWxsU3RhcnNEZW5zaXR5O1xyXG4gICAgICBsZXQgbWVkaXVtU3RhcnNDb3VudCA9IHdpbkFyZWEgKiBtZWRpdW1TdGFyc0RlbnNpdHk7XHJcbiAgICAgIGxldCBsYXJnZVN0YXJzQ291bnQgPSB3aW5BcmVhICogbGFyZ2VTdGFyc0RlbnNpdHk7XHJcbiAgICAgIHN0YXJzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNtYWxsU3RhcnNDb3VudDsgaSsrKVxyXG4gICAgICAgIHN0YXJzLnB1c2gobmV3IFN0YXIoY2FudmFzLCAxLCAzMCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpdW1TdGFyc0NvdW50OyBpKyspXHJcbiAgICAgICAgc3RhcnMucHVzaChuZXcgU3RhcihjYW52YXMsIDIsIDIwKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhcmdlU3RhcnNDb3VudDsgaSsrKVxyXG4gICAgICAgIHN0YXJzLnB1c2gobmV3IFN0YXIoY2FudmFzLCAzLCAxMCkpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXplZCBzdGFyc1wiLCBzdGFycyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1N0YXJzKGRlbHRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZHJhd2luZyBzdGFyc1wiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFycy5sZW5ndGg7IGkrKykgc3RhcnNbaV0uYW5pbWF0ZShkZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFpbnRMb29wKHRpbWVzdGFtcCkge1xyXG4gICAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJwYWludGluZ1wiKTtcclxuXHJcbiAgICAgIGxldCBkZWx0YSA9XHJcbiAgICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0aW1lc3RhbXAgLSBsYXN0UGFpbnRUaW1lIDogbXMpIC8gMTAwMDtcclxuXHJcbiAgICAgIGlmIChkZWx0YSA+IDAuMDUpIGRlbHRhID0gMC4wNTtcclxuXHJcbiAgICAgIGRyYXdTdGFycyhkZWx0YSk7XHJcblxyXG4gICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGFpbnRMb29wKSkgfHxcclxuICAgICAgICBzZXRUaW1lb3V0KHBhaW50TG9vcCwgbXMpO1xyXG5cclxuICAgICAgbGFzdFBhaW50VGltZSA9IHRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCwgZHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2c7XHJcblxyXG4gICAgICBsZXQgdGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmV3T3BhY2l0eSA9IChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uO1xyXG5cclxuICAgICAgICBpZiAobmV3T3BhY2l0eSA+IDEpIHtcclxuICAgICAgICAgIG5ld09wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spKSB8fFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpY2ssIDE2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG5ld09wYWNpdHk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJhY2tncm91bmQoKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnNcIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXplZFwiKTtcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RSZXNpemVUaW1lIDwgcmVzaXplQ29vbGRvd24gJiYgcmVzaXplVGltZW91dCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgcmVzaXplVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0UmVzaXplVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZmFkZUluKGNhbnZhcywgNTAwKTtcclxuICAgICAgICAgIGluaXRpYWxpemVTdGFycygpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNpemVkXCIpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5pdGlhbGl6ZVN0YXJzKCk7XHJcbiAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShwYWludExvb3ApKSB8fFxyXG4gICAgICAgIHNldFRpbWVvdXQocGFpbnRMb29wLCBtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS9cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudFxyXG4gICAgICAgICAgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcclxuICAgICAgICAgIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZm4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWR5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5pdGlhbGl6ZUJhY2tncm91bmQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJzXCIpO1xyXG5cclxuICAgICAgaWYgKGNhbnZhcykgc3RhcnNCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGNhbnZhcyBpZD1cInN0YXJzXCI+PC9jYW52YXM+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0YXJzIiwic3RhcnNCYWNrZ3JvdW5kIiwicmVzaXplVGltZW91dCIsInJlc2l6ZUNvb2xkb3duIiwibGFzdFJlc2l6ZVRpbWUiLCJEYXRlIiwibm93IiwiY2FudmFzIiwic3RhcnMiLCJtcyIsImxhc3RQYWludFRpbWUiLCJyYW5kIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsIlN0YXIiLCJzaXplIiwic3BlZWQiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ5IiwiaW5uZXJIZWlnaHQiLCJwcm90b3R5cGUiLCJhbmltYXRlIiwiZGVsdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImluaXRpYWxpemVTdGFycyIsIndpbkFyZWEiLCJzbWFsbFN0YXJzRGVuc2l0eSIsIm1lZGl1bVN0YXJzRGVuc2l0eSIsImxhcmdlU3RhcnNEZW5zaXR5Iiwic21hbGxTdGFyc0NvdW50IiwibWVkaXVtU3RhcnNDb3VudCIsImxhcmdlU3RhcnNDb3VudCIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRyYXdTdGFycyIsImxlbmd0aCIsInBhaW50TG9vcCIsInRpbWVzdGFtcCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImZhZGVJbiIsImVsZW1lbnQiLCJkdXJhdGlvbiIsImNhbGxiYWNrIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsInN0YXJ0VGltZSIsInRpY2siLCJuZXdPcGFjaXR5IiwiaW5pdGlhbGl6ZUJhY2tncm91bmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlYWR5IiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stars/Stars.jsx\n"));

/***/ })

});