gdjs.ConsoleCode = {};
gdjs.ConsoleCode.localVariables = [];
gdjs.ConsoleCode.idToCallbackMap = new Map();
gdjs.ConsoleCode.GDMenu_9595BackgroundObjects1= [];
gdjs.ConsoleCode.GDMenu_9595BackgroundObjects2= [];
gdjs.ConsoleCode.GDPlay_9595ButtonObjects1= [];
gdjs.ConsoleCode.GDPlay_9595ButtonObjects2= [];


gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.ConsoleCode.GDPlay_9595ButtonObjects1});
gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.ConsoleCode.GDPlay_9595ButtonObjects1});
gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.ConsoleCode.GDPlay_9595ButtonObjects1});
gdjs.ConsoleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "", 1, true, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.ConsoleCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MLKSHK_Theme", true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.mp3", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.ConsoleCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ConsoleCode.GDPlay_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.ConsoleCode.GDPlay_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ConsoleCode.GDPlay_9595ButtonObjects1[i].setColor("189;16;224");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.ConsoleCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConsoleCode.mapOfGDgdjs_9546ConsoleCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ConsoleCode.GDPlay_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.ConsoleCode.GDPlay_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ConsoleCode.GDPlay_9595ButtonObjects1[i].setColor("255;255;255");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ConsoleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConsoleCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.ConsoleCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.ConsoleCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.ConsoleCode.GDPlay_9595ButtonObjects2.length = 0;

gdjs.ConsoleCode.eventsList0(runtimeScene);
gdjs.ConsoleCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.ConsoleCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.ConsoleCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.ConsoleCode.GDPlay_9595ButtonObjects2.length = 0;


return;

}

gdjs['ConsoleCode'] = gdjs.ConsoleCode;
