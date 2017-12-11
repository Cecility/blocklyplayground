
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change cat Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/* Han's code */
Blockly.Blocks['saberpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change saber Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "saberIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['say'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Say");
      
      this.appendValueInput("TEXT")
          .setCheck("String");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setColour(5);
      this.setTooltip("");
      this.setHelpUrl("");
    }   
};  


Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updatePose('+dropdown_catindex+');';
    return blockCode;
};

/* Han's code */
Blockly.JavaScript['saberpose'] = function(block) {
    var dropdown_saberIndex = block.getFieldValue('saberIndex');
    var blockCode = 'updateSaberPose('+dropdown_saberIndex+');';
    return blockCode;
};

Blockly.JavaScript['say'] = function(block) {
    var inputText = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE);
    var blockCode = 'updateSay('+inputText+');';
    return blockCode;
}   