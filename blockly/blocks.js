//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#vmgn96
Blockly.Blocks['leddisplay_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("建立")
        .appendField(new Blockly.FieldVariable("ledDisplay"), "ledDisplay")
        .appendField("設定腳位")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]]), "pin")
        .appendField("設定顯示格式與位數")
        .appendField(new Blockly.FieldDropdown([["??:??", "00:00"], ["??.??", "00.00"], ["??.?", "00.0"]]), "fmt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#6my46v
Blockly.Blocks['leddisplay_show'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ledDisplay"), "ledDisplay")
        .appendField("顯示");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#fztcfg
Blockly.Blocks['leddisplay_showhhmm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ledDisplay"), "ledDisplay")
        .appendField("顯示時間")
        .appendField(new Blockly.FieldDropdown([["時：分", "showHHMM()"], ["分：秒", "showMMSS()"]]), "show");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#tegpz3
Blockly.Blocks['leddisplay_setcolor'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ledDisplay"), "ledDisplay")
        .appendField("第")
        .appendField(new Blockly.FieldDropdown([["All", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "n")
        .appendField("位數，顏色為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
