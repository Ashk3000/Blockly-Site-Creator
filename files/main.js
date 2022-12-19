import toolbox from "./toolbox.json" assert { type: "json" };

function demo() {
    console.log('hi')
    const jsCode = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(jsCode)
}

const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });