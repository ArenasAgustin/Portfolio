/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-parse-stringify";
exports.ids = ["vendor-chunks/html-parse-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.js":
/*!************************************************************************!*\
  !*** ./node_modules/html-parse-stringify/dist/html-parse-stringify.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var e,t=(e=__webpack_require__(/*! void-elements */ \"(ssr)/./node_modules/void-elements/index.js\"))&&\"object\"==typeof e&&\"default\"in e?e.default:e,n=/\\s([^'\"/\\s><]+?)[\\s/>]|([^\\s=]+)=\\s?(\".*?\"|'.*?')/g;function r(e){var r={type:\"tag\",name:\"\",voidElement:!1,attrs:{},children:[]},i=e.match(/<\\/?([^\\s]+?)[/\\s>]/);if(i&&(r.name=i[1],(t[i[1]]||\"/\"===e.charAt(e.length-2))&&(r.voidElement=!0),r.name.startsWith(\"!--\"))){var s=e.indexOf(\"--\\x3e\");return{type:\"comment\",comment:-1!==s?e.slice(4,s):\"\"}}for(var c=new RegExp(n),a=null;null!==(a=c.exec(e));)if(a[0].trim())if(a[1]){var o=a[1].trim(),u=[o,\"\"];o.indexOf(\"=\")>-1&&(u=o.split(\"=\")),r.attrs[u[0]]=u[1],c.lastIndex--}else a[2]&&(r.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return r}var i=/<[a-zA-Z0-9\\-\\!\\/](?:\"[^\"]*\"|'[^']*'|[^'\">])*>/g,s=/^\\s*$/,c=Object.create(null);function a(e,t){switch(t.type){case\"text\":return e+t.content;case\"tag\":return e+=\"<\"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'=\"'+e[n]+'\"');return t.length?\" \"+t.join(\" \"):\"\"}(t.attrs):\"\")+(t.voidElement?\"/>\":\">\"),t.voidElement?e:e+t.children.reduce(a,\"\")+\"</\"+t.name+\">\";case\"comment\":return e+\"\\x3c!--\"+t.comment+\"--\\x3e\"}}module.exports={parse:function(e,t){t||(t={}),t.components||(t.components=c);var n,a=[],o=[],u=-1,l=!1;if(0!==e.indexOf(\"<\")){var m=e.indexOf(\"<\");a.push({type:\"text\",content:-1===m?e:e.substring(0,m)})}return e.replace(i,function(i,c){if(l){if(i!==\"</\"+n.name+\">\")return;l=!1}var m,d=\"/\"!==i.charAt(1),f=i.startsWith(\"\\x3c!--\"),h=c+i.length,p=e.charAt(h);if(f){var v=r(i);return u<0?(a.push(v),a):((m=o[u]).children.push(v),a)}if(d&&(u++,\"tag\"===(n=r(i)).type&&t.components[n.name]&&(n.type=\"component\",l=!0),n.voidElement||l||!p||\"<\"===p||n.children.push({type:\"text\",content:e.slice(h,e.indexOf(\"<\",h))}),0===u&&a.push(n),(m=o[u-1])&&m.children.push(n),o[u]=n),(!d||n.voidElement)&&(u>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(u--,n=-1===u?a:o[u]),!l&&\"<\"!==p&&p)){m=-1===u?a:o[u].children;var x=e.indexOf(\"<\",h),g=e.slice(h,-1===x?void 0:x);s.test(g)&&(g=\" \"),(x>-1&&u+m.length>=0||\" \"!==g)&&m.push({type:\"text\",content:g})}}),a},stringify:function(e){return e.reduce(function(e,t){return e+a(\"\",t)},\"\")}};\n//# sourceMappingURL=html-parse-stringify.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1CQUFPLENBQUMsa0VBQWUseUdBQXlHLGNBQWMsT0FBTywwQ0FBMEMsYUFBYSxrQ0FBa0Msd0dBQXdHLDBCQUEwQixPQUFPLCtDQUErQywrQkFBK0IscUJBQXFCLHlCQUF5QiwyQkFBMkIscUVBQXFFLGtFQUFrRSxTQUFTLHdGQUF3RixnQkFBZ0IsZUFBZSw4QkFBOEIsb0RBQW9ELFNBQVMsdUNBQXVDLG1DQUFtQyxpR0FBaUcscURBQXFELGdCQUFnQixvQkFBb0IsUUFBUSxpQ0FBaUMsMEJBQTBCLHVCQUF1QixxQkFBcUIsUUFBUSw4Q0FBOEMsRUFBRSxpQ0FBaUMsTUFBTSw4QkFBOEIsS0FBSywrRUFBK0UsTUFBTSxXQUFXLHVEQUF1RCxrSUFBa0ksZ0RBQWdELHNLQUFzSyx5QkFBeUIsb0RBQW9ELDJEQUEyRCxzQkFBc0IsR0FBRyxJQUFJLHVCQUF1Qiw4QkFBOEIsaUJBQWlCO0FBQzFrRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9odG1sLXBhcnNlLXN0cmluZ2lmeS9kaXN0L2h0bWwtcGFyc2Utc3RyaW5naWZ5LmpzPzViMDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGUsdD0oZT1yZXF1aXJlKFwidm9pZC1lbGVtZW50c1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZS5kZWZhdWx0OmUsbj0vXFxzKFteJ1wiL1xccz48XSs/KVtcXHMvPl18KFteXFxzPV0rKT1cXHM/KFwiLio/XCJ8Jy4qPycpL2c7ZnVuY3Rpb24gcihlKXt2YXIgcj17dHlwZTpcInRhZ1wiLG5hbWU6XCJcIix2b2lkRWxlbWVudDohMSxhdHRyczp7fSxjaGlsZHJlbjpbXX0saT1lLm1hdGNoKC88XFwvPyhbXlxcc10rPylbL1xccz5dLyk7aWYoaSYmKHIubmFtZT1pWzFdLCh0W2lbMV1dfHxcIi9cIj09PWUuY2hhckF0KGUubGVuZ3RoLTIpKSYmKHIudm9pZEVsZW1lbnQ9ITApLHIubmFtZS5zdGFydHNXaXRoKFwiIS0tXCIpKSl7dmFyIHM9ZS5pbmRleE9mKFwiLS1cXHgzZVwiKTtyZXR1cm57dHlwZTpcImNvbW1lbnRcIixjb21tZW50Oi0xIT09cz9lLnNsaWNlKDQscyk6XCJcIn19Zm9yKHZhciBjPW5ldyBSZWdFeHAobiksYT1udWxsO251bGwhPT0oYT1jLmV4ZWMoZSkpOylpZihhWzBdLnRyaW0oKSlpZihhWzFdKXt2YXIgbz1hWzFdLnRyaW0oKSx1PVtvLFwiXCJdO28uaW5kZXhPZihcIj1cIik+LTEmJih1PW8uc3BsaXQoXCI9XCIpKSxyLmF0dHJzW3VbMF1dPXVbMV0sYy5sYXN0SW5kZXgtLX1lbHNlIGFbMl0mJihyLmF0dHJzW2FbMl1dPWFbM10udHJpbSgpLnN1YnN0cmluZygxLGFbM10ubGVuZ3RoLTEpKTtyZXR1cm4gcn12YXIgaT0vPFthLXpBLVowLTlcXC1cXCFcXC9dKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vZyxzPS9eXFxzKiQvLGM9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBhKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidGV4dFwiOnJldHVybiBlK3QuY29udGVudDtjYXNlXCJ0YWdcIjpyZXR1cm4gZSs9XCI8XCIrdC5uYW1lKyh0LmF0dHJzP2Z1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQucHVzaChuKyc9XCInK2Vbbl0rJ1wiJyk7cmV0dXJuIHQubGVuZ3RoP1wiIFwiK3Quam9pbihcIiBcIik6XCJcIn0odC5hdHRycyk6XCJcIikrKHQudm9pZEVsZW1lbnQ/XCIvPlwiOlwiPlwiKSx0LnZvaWRFbGVtZW50P2U6ZSt0LmNoaWxkcmVuLnJlZHVjZShhLFwiXCIpK1wiPC9cIit0Lm5hbWUrXCI+XCI7Y2FzZVwiY29tbWVudFwiOnJldHVybiBlK1wiXFx4M2MhLS1cIit0LmNvbW1lbnQrXCItLVxceDNlXCJ9fW1vZHVsZS5leHBvcnRzPXtwYXJzZTpmdW5jdGlvbihlLHQpe3R8fCh0PXt9KSx0LmNvbXBvbmVudHN8fCh0LmNvbXBvbmVudHM9Yyk7dmFyIG4sYT1bXSxvPVtdLHU9LTEsbD0hMTtpZigwIT09ZS5pbmRleE9mKFwiPFwiKSl7dmFyIG09ZS5pbmRleE9mKFwiPFwiKTthLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDotMT09PW0/ZTplLnN1YnN0cmluZygwLG0pfSl9cmV0dXJuIGUucmVwbGFjZShpLGZ1bmN0aW9uKGksYyl7aWYobCl7aWYoaSE9PVwiPC9cIituLm5hbWUrXCI+XCIpcmV0dXJuO2w9ITF9dmFyIG0sZD1cIi9cIiE9PWkuY2hhckF0KDEpLGY9aS5zdGFydHNXaXRoKFwiXFx4M2MhLS1cIiksaD1jK2kubGVuZ3RoLHA9ZS5jaGFyQXQoaCk7aWYoZil7dmFyIHY9cihpKTtyZXR1cm4gdTwwPyhhLnB1c2godiksYSk6KChtPW9bdV0pLmNoaWxkcmVuLnB1c2godiksYSl9aWYoZCYmKHUrKyxcInRhZ1wiPT09KG49cihpKSkudHlwZSYmdC5jb21wb25lbnRzW24ubmFtZV0mJihuLnR5cGU9XCJjb21wb25lbnRcIixsPSEwKSxuLnZvaWRFbGVtZW50fHxsfHwhcHx8XCI8XCI9PT1wfHxuLmNoaWxkcmVuLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDplLnNsaWNlKGgsZS5pbmRleE9mKFwiPFwiLGgpKX0pLDA9PT11JiZhLnB1c2gobiksKG09b1t1LTFdKSYmbS5jaGlsZHJlbi5wdXNoKG4pLG9bdV09biksKCFkfHxuLnZvaWRFbGVtZW50KSYmKHU+LTEmJihuLnZvaWRFbGVtZW50fHxuLm5hbWU9PT1pLnNsaWNlKDIsLTEpKSYmKHUtLSxuPS0xPT09dT9hOm9bdV0pLCFsJiZcIjxcIiE9PXAmJnApKXttPS0xPT09dT9hOm9bdV0uY2hpbGRyZW47dmFyIHg9ZS5pbmRleE9mKFwiPFwiLGgpLGc9ZS5zbGljZShoLC0xPT09eD92b2lkIDA6eCk7cy50ZXN0KGcpJiYoZz1cIiBcIiksKHg+LTEmJnUrbS5sZW5ndGg+PTB8fFwiIFwiIT09ZykmJm0ucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Omd9KX19KSxhfSxzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrYShcIlwiLHQpfSxcIlwiKX19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC1wYXJzZS1zdHJpbmdpZnkuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.js\n");

/***/ })

};
;