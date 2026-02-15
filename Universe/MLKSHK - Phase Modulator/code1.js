gdjs.Theme_95SelectCode = {};
gdjs.Theme_95SelectCode.localVariables = [];
gdjs.Theme_95SelectCode.idToCallbackMap = new Map();
gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects1= [];
gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects2= [];
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects1= [];
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects2= [];
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1= [];
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects2= [];
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1= [];
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects2= [];
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1= [];
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects2= [];


gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects = Hashtable.newFrom({"Record_Breaker_Icon": gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects = Hashtable.newFrom({"Record_Breaker_Icon": gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects = Hashtable.newFrom({"Record_Breaker_Icon": gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Trump_Edition_Icon": gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Trump_Edition_Icon": gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Trump_Edition_Icon": gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Rogan_Edition_Icon": gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Rogan_Edition_Icon": gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects = Hashtable.newFrom({"Rogan_Edition_Icon": gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1});
gdjs.Theme_95SelectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Select Master -10 LUF v2S.mp3", 1, true, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Record_Breaker_Icon"), gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Record_Breaker_Icon"), gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1[i].setColor("229;104;253");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Record_Breaker_Icon"), gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRecord_95959595Breaker_95959595IconObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("Trump_Edition_Icon"), gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trump_Edition_Icon"), gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trump_Edition_Icon"), gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDTrump_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Trump_Edition_Theme", true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.mp3", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rogan_Edition_Icon"), gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1[i].setColor("28;248;64");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rogan_Edition_Icon"), gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1 */
{for(var i = 0, len = gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1.length ;i < len;++i) {
    gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rogan_Edition_Icon"), gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Theme_95SelectCode.mapOfGDgdjs_9546Theme_959595SelectCode_9546GDRogan_95959595Edition_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rogan_Edtion_Theme", true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.mp3", false, 50, 1);
}
}

}


};

gdjs.Theme_95SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects2.length = 0;
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects2.length = 0;
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects2.length = 0;

gdjs.Theme_95SelectCode.eventsList0(runtimeScene);
gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.Theme_95SelectCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.Theme_95SelectCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDRecord_9595Breaker_9595IconObjects2.length = 0;
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDTrump_9595Edition_9595IconObjects2.length = 0;
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects1.length = 0;
gdjs.Theme_95SelectCode.GDRogan_9595Edition_9595IconObjects2.length = 0;


return;

}

gdjs['Theme_95SelectCode'] = gdjs.Theme_95SelectCode;
