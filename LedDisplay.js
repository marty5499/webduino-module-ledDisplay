+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var self;
  var proto;
  var Module = scope.Module;

  function getHHMM() {
    var date = new Date();
    var strDate = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    strDate += ":";
    strDate += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    //strDate += ":";
    //strDate += date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return strDate;
  }

  function getMMSS() {
    var date = new Date();
    //var strDate = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    //strDate += ":";
    var strDate = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    strDate += ":";
    strDate += date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return strDate;
  }

  function getHHMMSS() {
    var date = new Date();
    var strDate = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    strDate += ":";
    strDate += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    strDate += ":";
    strDate += date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return strDate;
  }

  function LEDDisplay(board, pin, fmt) {
    Module.call(this);
    self = this;
    this.board = board;
    self.pin = pin;
    self.fmt = fmt;
    this.create(fmt);
    board.on(webduino.BoardEvent.SYSEX_MESSAGE,
      function (event) {
        console.log("recv:", event);
      });
  }

  LEDDisplay.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: LEDDisplay
    }
  });

  proto.create = function (data) {
    var cmd = [0xF0, 0x04, 0x21, 0x10 /*create*/ , self.pin];
    for (var i = 0; i < data.length; i++) {
      cmd.push(data.charCodeAt(i));
    }
    cmd.push(0xF7);
    self.board.send(cmd);
  }

  proto.show = function (data) {
    var cmd = [0xF0, 0x04, 0x21, 0x11 /*show*/ ];
    for (var i = 0; i < data.length; i++) {
      cmd.push(data.charCodeAt(i));
    }
    cmd.push(0xF7);
    self.board.send(cmd);
  }

  proto.color = function (color, n) {
    var color = color.substring(1);
    var r = parseInt('0x' + color.substring(0, 2)) / 2;
    var g = parseInt('0x' + color.substring(2, 4)) / 2;
    var b = parseInt('0x' + color.substring(4, 6)) / 2;
    var cmd = [0xF0, 0x04, 0x21, 0x12, r, g, b, n, 0xF7];
    self.board.send(cmd);
  }

  proto.showHHMMSS = function () {
    this.show(getHHMMSS());
  }

  proto.showHHMM = function () {
    this.show(getHHMM());
  }

  proto.showMMSS = function () {
    this.show(getMMSS());
  }

  scope.module.LEDDisplay = LEDDisplay;
}));