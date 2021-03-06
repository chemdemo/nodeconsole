'use strict';

var util = require('util');
var cp = require('child_process');
var fs = require('fs');
var path = require('path');
// var async = require('async');
var Session = require('./Session');
var conf = require('../../config');
var helper = require('../helper');
var logger = helper.logger;

var FsSession = module.exports = function(socket) {
    if(!(this instanceof FsSession)) return new FsSession(socket);

    Session.call(this, socket);
};

util.inherits(FsSession, Session);

var _proto = FsSession.prototype;

// get path's status
_proto.lstat = function(p, callback) {
    lstat(p, function(err, stats) {
        if(err) return callback(err);
        if(stats.isDirectory()) return callback(null, 0);
        if(stats.isFile()) return callback(null, 1);
        if(stats.isBlockDevice()) return callback(null, 2);
        if(stats.isCharacterDevice()) return callback(null, 3);
        if(stats.isSymbolicLink()) return callback(null, 4);
        if(stats.isFIFO()) return callback(null, 5);
        if(stats.isSocket()) return callback(null, 6);
        return callback(null, -1);
    });
};

_proto.readPath = function(p, callback) {
    if(!fs.existsSync(p)) return callback(new Error('path ' + p + ' is not exists.'));

    lstat(p, function(err, stats) {
        if(err) return callback(err);

        // if(stats.isDirectory()) return readdir(p, callback);

        // if(stats.isFile()) return readFile(p, callback);

        var abs = helper.winPathFix(path.resolve(p));

        callback(null, {
            n: basename(abs),
            t: stats.isDirectory() ? 0 : 1,
            p: abs
        });
    });
};

_proto.readDir = function readDir(p, callback) {
    fs.readdir(p, function(err, list) {
        if(err) return callback(err);
        helper.parallel(list, function(_p, cb) {
            _p = path.resolve(p, _p);
            lstat(_p, function(err, stats) {
                if(err) return cb(err);

                if(stats.isDirectory()) {
                    cb(null, {
                        n: basename(_p),
                        t: 0,
                        p: helper.winPathFix(_p)
                    });
                } else {
                    cb(null, {
                        n: basename(_p),
                        t: 1,
                        p: helper.winPathFix(_p),
                        e: extname(_p)
                    });
                }
            });
        }, callback/*function(err, list) {
            if(err) return callback(err);
            callback(null, {
                parent: {
                    n: basename(p),
                    t: 0,
                    p: path.resolve(p),
                },
                child: list
            });
        }*/);
    });
};

_proto.readFile = function readFile(p, callback) {
    fs.readFile(p, function(err, buf) {
        if(err) return callback(err);
        callback(null, buf.toString('utf8'));
    });
};

_proto.mvPath = function(p, target, callback) {
    fs.stat(p, function(err, stats) {
        if(err) return callback(err);

        cp.exec(['mv' + stats.isDirectory() ? ' -r' : '', p, target].join(' '), callback);
    });
};

_proto.rmPath = function(p, callback) {
    fs.stat(p, function(err, stats) {
        if(err) return callback(err);

        if(stats.isDirectory()) fs.rmdir(p, callback);
        else fs.unlink(p, callback);
    });
};

_proto.createFolder = function(p, callback) {
    fs.mkdir(p, callback);
};

_proto.createFile = function(p, callback) {
    fs.writeFile(p, '', callback);
};

_proto.writeFile = function(p, data, callback) {
    fs.appendFile(p, data, callback);
};

function lstat(p, callback) {
    fs.lstat(p, callback);
};

function basename(p) {
    return path.basename(p);
};

function extname(p) {
    return path.extname(p).slice(1);
};
