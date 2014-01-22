(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * main.js
 * Copyright (c) 2013-2014, dmyang (MIT License)
 */

'use strict';

// require('./bind')();
require('./ui');
var tmpl = require('./tmpl');
var data = [
    {
        path: '/data/sites/www.abc.com',
        isDir: true,
        filename: 'www.abc.com'
    },
    {
        path: '/data/sites/www.abc.com/a.zip',
        isDir: false,
        filename: 'a.zip'
    }
];

console.log(tmpl["Tmpl"]["fileList"]({list: data}));

},{"./tmpl":2,"./ui":3}],2:[function(require,module,exports){
this["Tmpl"] = this["Tmpl"] || {};

this["Tmpl"]["fileList"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<ul>\n'; list.forEach(function(item) { ;__p += '\n<li>\n<i class="fa fa-' +((__t = ( item.isDir ? 'folder' : 'file' )) == null ? '' : __t) +'-o"></i>\n<span class="path-name" data-path="' +((__t = ( item.path )) == null ? '' : __t) +'">' +((__t = ( item.filename )) == null ? '' : __t) +'</span>\n</li>\n'; }); ;__p += '\n</ul>';}return __p};
},{}],3:[function(require,module,exports){
/**
 * ui.js
 * Copyright (c) 2013-2014, dmyang (MIT License)
 */

'use strict';

// module.exports = function() {
//     ;
// };

$('#gui').on('click', '.nav-tabs a', function(e) {
    e.preventDefault();
    $(this).tab('show');
});

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJFOlxcc2VydmVyXFxub2RlanNcXHByb2pzXFxub2RlLXdlYi1jb25zb2xlXFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRTovc2VydmVyL25vZGVqcy9wcm9qcy9ub2RlLXdlYi1jb25zb2xlL2NsaWVudC9kZXYvanMvaW5pdGlhbGl6ZS5qcyIsIkU6L3NlcnZlci9ub2RlanMvcHJvanMvbm9kZS13ZWItY29uc29sZS9jbGllbnQvZGV2L2pzL3RtcGwuanMiLCJFOi9zZXJ2ZXIvbm9kZWpzL3Byb2pzL25vZGUtd2ViLWNvbnNvbGUvY2xpZW50L2Rldi9qcy91aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBtYWluLmpzXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE0LCBkbXlhbmcgKE1JVCBMaWNlbnNlKVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIHJlcXVpcmUoJy4vYmluZCcpKCk7XHJcbnJlcXVpcmUoJy4vdWknKTtcclxudmFyIHRtcGwgPSByZXF1aXJlKCcuL3RtcGwnKTtcclxudmFyIGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kYXRhL3NpdGVzL3d3dy5hYmMuY29tJyxcclxuICAgICAgICBpc0RpcjogdHJ1ZSxcclxuICAgICAgICBmaWxlbmFtZTogJ3d3dy5hYmMuY29tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2RhdGEvc2l0ZXMvd3d3LmFiYy5jb20vYS56aXAnLFxyXG4gICAgICAgIGlzRGlyOiBmYWxzZSxcclxuICAgICAgICBmaWxlbmFtZTogJ2EuemlwJ1xyXG4gICAgfVxyXG5dO1xyXG5cclxuY29uc29sZS5sb2codG1wbFtcIlRtcGxcIl1bXCJmaWxlTGlzdFwiXSh7bGlzdDogZGF0YX0pKTtcclxuIiwidGhpc1tcIlRtcGxcIl0gPSB0aGlzW1wiVG1wbFwiXSB8fCB7fTtcclxuXHJcbnRoaXNbXCJUbXBsXCJdW1wiZmlsZUxpc3RcIl0gPSBmdW5jdGlvbihvYmopIHtvYmogfHwgKG9iaiA9IHt9KTt2YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGUsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO2Z1bmN0aW9uIHByaW50KCkgeyBfX3AgKz0gX19qLmNhbGwoYXJndW1lbnRzLCAnJykgfXdpdGggKG9iaikge19fcCArPSAnPHVsPlxcbic7IGxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IDtfX3AgKz0gJ1xcbjxsaT5cXG48aSBjbGFzcz1cImZhIGZhLScgKygoX190ID0gKCBpdGVtLmlzRGlyID8gJ2ZvbGRlcicgOiAnZmlsZScgKSkgPT0gbnVsbCA/ICcnIDogX190KSArJy1vXCI+PC9pPlxcbjxzcGFuIGNsYXNzPVwicGF0aC1uYW1lXCIgZGF0YS1wYXRoPVwiJyArKChfX3QgPSAoIGl0ZW0ucGF0aCApKSA9PSBudWxsID8gJycgOiBfX3QpICsnXCI+JyArKChfX3QgPSAoIGl0ZW0uZmlsZW5hbWUgKSkgPT0gbnVsbCA/ICcnIDogX190KSArJzwvc3Bhbj5cXG48L2xpPlxcbic7IH0pOyA7X19wICs9ICdcXG48L3VsPic7fXJldHVybiBfX3B9OyIsIi8qKlxuICogdWkuanNcbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE0LCBkbXlhbmcgKE1JVCBMaWNlbnNlKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbi8vICAgICA7XG4vLyB9O1xuXG4kKCcjZ3VpJykub24oJ2NsaWNrJywgJy5uYXYtdGFicyBhJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnRhYignc2hvdycpO1xufSk7XG4iXX0=
