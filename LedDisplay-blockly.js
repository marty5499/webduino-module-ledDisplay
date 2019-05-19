+(function (window, webduino) {

  'use strict';

  window.getLEDDisplay = function (board, pin, fmt) {
    return new webduino.module.LEDDisplay(board, pin, fmt);
  };

}(window, window.webduino));