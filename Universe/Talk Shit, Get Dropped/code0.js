gdjs.Main_95MenuCode = {};
gdjs.Main_95MenuCode.localVariables = [];
gdjs.Main_95MenuCode.idToCallbackMap = new Map();
gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects1= [];
gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects2= [];
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1= [];
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects2= [];


gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1});
gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1});
gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1});
gdjs.Main_95MenuCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1[i].setColor("189;16;224");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_9546Main_959595MenuCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1[i].setColor("255;255;255");
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

gdjs.Main_95MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects2.length = 0;

gdjs.Main_95MenuCode.eventsList0(runtimeScene);
gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.Main_95MenuCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlay_9595ButtonObjects2.length = 0;


return;

}

gdjs['Main_95MenuCode'] = gdjs.Main_95MenuCode;
