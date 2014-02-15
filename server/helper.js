'use strict';

var crypto = require('crypto');
var conf = require('../config');

exports.logger = function() {
    // it works in browser but not node!!
    // var prop = console.constructor.prototype;
    // var r = {};

    // for(var k in prop) {
    //     if(typeof prop[k] === 'function') {
    //         r[k] = conf.debug ? console[k].bind(console) : function() {};
    //     }
    // }

    // return r;

    var props = ['debug', 'info', 'log', 'error', 'warn'];
    var r = {};

    props.forEach(function(k) {
        r[k] = conf.debug ? console[k] : function() {};
    });

    return r;
}();

exports.sha1 = function(str) {
    var hash = crypto.createHash('sha1');
    hash.update(str, 'utf8');
    return str = hash.digest('hex');
};

exports.hashed = function(text) {
    if (!text) return;
    return text.length === 40 && !/[^a-f0-9]/.test(text);
};
