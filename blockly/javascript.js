Blockly.JavaScript['leddisplay_create'] = function (block) {
  var variable_leddisplay = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ledDisplay'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_fmt = block.getFieldValue('fmt');
  var code = variable_leddisplay + '=getLEDDisplay(board,' + dropdown_pin + ',"' + dropdown_fmt + '");\n';
  return code;
};


Blockly.JavaScript['leddisplay_show'] = function (block) {
  var variable_leddisplay = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ledDisplay'), Blockly.Variables.NAME_TYPE);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_leddisplay + '.show(' + value_data + ');\n';
  return code;
};


Blockly.JavaScript['leddisplay_showhhmm'] = function (block) {
  var variable_leddisplay = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ledDisplay'), Blockly.Variables.NAME_TYPE);
  var code = variable_leddisplay + '.showHHMM();\n';
  return code;
};

Blockly.JavaScript['leddisplay_showhhmm'] = function (block) {
  var variable_leddisplay = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ledDisplay'), Blockly.Variables.NAME_TYPE);
  var dropdown_show = block.getFieldValue('show');
  var code = variable_leddisplay + '.' + dropdown_show + ';\n';
  return code;
};


Blockly.JavaScript['leddisplay_setcolor'] = function (block) {
  var variable_leddisplay = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ledDisplay'), Blockly.Variables.NAME_TYPE);
  var dropdown_n = block.getFieldValue('n');
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_leddisplay + '.color(' + value_color + ',' + dropdown_n + ');\n';
  return code;
};