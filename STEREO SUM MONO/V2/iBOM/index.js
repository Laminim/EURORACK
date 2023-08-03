(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*************************************************
              Board Rotation                    
*************************************************/
var storage
var storagePrefix = 'INTERACTIVE_PCB__' + pcbdata.metadata.title + '__' + pcbdata.metadata.revision + '__'

function initStorage (key) {
  try {
    window.localStorage.getItem("blank");
    storage = window.localStorage;
  } catch (e) {
    console.log("Storage init error");
    // localStorage not available
  }
  if (!storage) {
    try {
      window.sessionStorage.getItem("blank");
      storage = window.sessionStorage;
    } catch (e) {
      // sessionStorage also not available
    }
  }
}

function readStorage(key) {
  if (storage) {
    return storage.getItem(storagePrefix + '#' + key);
  } else {
    return null;
  }
}

function writeStorage(key, value) {
  if (storage) {
    storage.setItem(storagePrefix + '#' + key, value);
  }
}

/************************************************/

/*************************************************
              Highlighted Refs                    
*************************************************/
var highlightedRefs = [];

function setHighlightedRefs(refs){
    highlightedRefs = refs.split(',');
}

function getHighlightedRefs(){
    return highlightedRefs;
}
/************************************************/

/*************************************************
              Redraw On Drag                      
*************************************************/
var redrawOnDrag = true;

  
function setRedrawOnDrag(value){
    redrawOnDrag = value;
    writeStorage("redrawOnDrag", value);
}

function getRedrawOnDrag(){
    return redrawOnDrag;
}

/************************************************/


/*************************************************
                 Debug Mode                       
*************************************************/
var debugMode = false;

  
function setDebugMode(value){
    debugMode = value;
    writeStorage("debugMode", value);
}

function getDebugMode(){
    return debugMode;
}

/************************************************/

/*************************************************
layer Split
*************************************************/
var layersplit;

function setLayerSplit(value){
    layersplit = value;
}

function getLayerSplit(){
    return layersplit;
}

function destroyLayerSplit(){
    layersplit.destroy()
}

/*************************************************
BOM Split
*************************************************/
var bomsplit;

function setBomSplit(value){
    bomsplit = value;
}

function getBomSplit(){
    return bomsplit;
}

function destroyBomSplit(){
    bomsplit.destroy()
}

/************************************************/

/*************************************************
Canvas Split
*************************************************/
var canvassplit;

function setCanvasSplit(value){
    canvassplit = value;
}

function getCanvasSplit(){
    return canvassplit;
}

function destroyCanvasSplit(){
    canvassplit.destroy()
}

function collapseCanvasSplit(value)
{
    canvassplit.collapse(value);
}

function setSizesCanvasSplit(value){
    canvassplit.setSizes([50, 50]);
}

/************************************************/

/*************************************************
Canvas Layout
*************************************************/
var canvaslayout = "FB";

/*XXX Found a bug at startup. Code assumes that canvas layout 
is in one of three states. then system fails. he bug was that the 
canvasLayout was being set to 'default' which is not a valid state. 
So no is check that if default is sent in then set the layout to FB mode.
*/
/* TODO: Make the default check below actually check that the item 
is in one of the three valid states. If not then set to FB, otherwise set to one of
the three valid states
*/
function setCanvasLayout(value){
    if(value == 'default'){
        canvaslayout = 'FB'
    }
    else {
        canvaslayout = value;
    }
}

function getCanvasLayout(){
    return canvaslayout;
}

/************************************************/

/*************************************************
BOM Layout
*************************************************/
var bomlayout = "default";

function setBomLayout(value){
    bomlayout = value;
}

function getBomLayout(){
    return bomlayout;
}

/************************************************/

/*************************************************
BOM Sort Function
*************************************************/
var bomSortFunction = null;

function setBomSortFunction(value){
    bomSortFunction = value;
}

function getBomSortFunction(){
    return bomSortFunction;
}

/************************************************/

/*************************************************
Current Sort Column
*************************************************/
var currentSortColumn = null;

function setCurrentSortColumn(value){
    currentSortColumn = value;
}

function getCurrentSortColumn(){
    return currentSortColumn;
}

/************************************************/

/*************************************************
Current Sort Order
*************************************************/
var currentSortOrder = null;

function setCurrentSortOrder(value){
    currentSortOrder = value;
}

function getCurrentSortOrder(){
    return currentSortOrder;
}

/************************************************/

/*************************************************
Current Highlighted Row ID
*************************************************/
var currentHighlightedRowId;

function setCurrentHighlightedRowId(value){
    currentHighlightedRowId = value;
}

function getCurrentHighlightedRowId(){
    return currentHighlightedRowId;
}

/************************************************/

/*************************************************
Highlight Handlers
*************************************************/
var highlightHandlers = [];

function setHighlightHandlers(values){
    highlightHandlers = values;
}

function getHighlightHandlers(){
    return highlightHandlers;
}

function pushHighlightHandlers(value){
    highlightHandlers.push(value);
}

/************************************************/

/*************************************************
Checkboxes
*************************************************/
var checkboxes = [];

function setCheckboxes(values){
    checkboxes = values;
}

function getCheckboxes(){
    return checkboxes;
}

/************************************************/

/*************************************************
BOM Checkboxes
*************************************************/
var bomCheckboxes = "";

function setBomCheckboxes(values){
    bomCheckboxes = values;
}

function getBomCheckboxes(){
    return bomCheckboxes;
}
/************************************************/

/*************************************************
Remove BOM Entries
*************************************************/
var removeBOMEntries = "";

function setRemoveBOMEntries(values){
    removeBOMEntries = values;
}

function getRemoveBOMEntries(){
    return removeBOMEntries;
}
/************************************************/


/*************************************************
Remove BOM Entries
*************************************************/
var additionalAttributes = "";

function setAdditionalAttributes(values){
    additionalAttributes = values;
}

function getAdditionalAttributes(){
    return additionalAttributes;
}
/************************************************/


/*************************************************
Highlight Pin 1
*************************************************/
var highlightpin1 = false;

function setHighlightPin1(value) {
  writeStorage("highlightpin1", value);
  highlightpin1 = value;
}

function getHighlightPin1(){
    return highlightpin1;
}

/************************************************/

/*************************************************
Last Clicked Ref
*************************************************/
var lastClickedRef;

function setLastClickedRef(value) {
    lastClickedRef = value;
}

function getLastClickedRef() {
  return lastClickedRef;
}

/************************************************/


/*************************************************
Combine Values
*************************************************/
var combineValues = false;

function setCombineValues(value) {
  writeStorage("combineValues", value);
  combineValues = value;
}

function getCombineValues(){
    return combineValues;
}
/************************************************/



/*************************************************
Combine Values
*************************************************/
var hidePlacedParts = false;

function setHidePlacedParts(value) {
  writeStorage("hidePlacedParts", value);
  hidePlacedParts = value;
}

function getHidePlacedParts(){
    return hidePlacedParts;
}
/************************************************/


module.exports = {
  initStorage                , readStorage                , writeStorage       ,
  setHighlightedRefs         , getHighlightedRefs         ,
  setRedrawOnDrag            , getRedrawOnDrag            ,
  setDebugMode               , getDebugMode               ,
  setBomSplit                , getBomSplit                , destroyBomSplit    ,
  setLayerSplit                , getLayerSplit                , destroyLayerSplit    ,
  setCanvasSplit             , getCanvasSplit             , destroyCanvasSplit , collapseCanvasSplit , setSizesCanvasSplit,
  setCanvasLayout            , getCanvasLayout            ,
  setBomLayout               , getBomLayout               ,
  setBomSortFunction         , getBomSortFunction         ,
  setCurrentSortColumn       , getCurrentSortColumn       ,
  setCurrentSortOrder        , getCurrentSortOrder        ,
  setCurrentHighlightedRowId , getCurrentHighlightedRowId ,
  setHighlightHandlers       , getHighlightHandlers       , pushHighlightHandlers ,
  setCheckboxes              , getCheckboxes              ,
  setBomCheckboxes           , getBomCheckboxes           ,
  setRemoveBOMEntries        , getRemoveBOMEntries        ,
  setAdditionalAttributes    , getAdditionalAttributes    ,
  setHighlightPin1           , getHighlightPin1           ,
  setLastClickedRef          , getLastClickedRef          ,
  setCombineValues           , getCombineValues           ,
  setHidePlacedParts         , getHidePlacedParts
};
},{}],2:[function(require,module,exports){

var globalData = require('./global.js')
var render     = require('./render.js')
var ibom       = require('./ibom.js')

const boardRotation = document.getElementById('boardRotation');
boardRotation.oninput=function()
{
  render.setBoardRotation(boardRotation.value);
}

const darkModeBox = document.getElementById('darkmodeCheckbox');
darkModeBox.onchange = function () {
  ibom.setDarkMode(darkModeBox.checked)
}

const silkscreenCheckbox = document.getElementById('silkscreenCheckbox');
silkscreenCheckbox.checked=function(){
  ibom.silkscreenVisible(silkscreenCheckbox.checked)
}
silkscreenCheckbox.onchange=function(){
  ibom.silkscreenVisible(silkscreenCheckbox.checked)
}

const highlightpin1Checkbox =document.getElementById('highlightpin1Checkbox');
highlightpin1Checkbox.onchange=function(){
  globalData.setHighlightPin1(highlightpin1Checkbox.checked);
  render.redrawCanvas(allcanvas.front);
  render.redrawCanvas(allcanvas.back);
}

const dragCheckbox = document.getElementById('dragCheckbox');
dragCheckbox.checked=function(){
  globalData.setRedrawOnDrag(dragCheckbox.checked)
}
dragCheckbox.onchange=function(){
  globalData.setRedrawOnDrag(dragCheckbox.checked)
}


const combineValues = document.getElementById('combineValues');
combineValues.onchange=function(){
  globalData.setCombineValues(combineValues.checked);
  ibom.populateBomTable();
}


const hidePlacedParts = document.getElementById('hidePlacedParts');
hidePlacedParts.onchange=function(){
  globalData.setHidePlacedParts(hidePlacedParts.checked);
  ibom.populateBomTable();
}

const debugModeBox = document.getElementById('debugMode');
debugModeBox.onchange=function(){
  globalData.setDebugMode(debugModeBox.checked)
  render.redrawCanvas(allcanvas.front);
  render.redrawCanvas(allcanvas.back);
}




const filter = document.getElementById('filter');
filter.oninput=function(){
  ibom.setFilter(filter.value)
}

const clearFilter = document.getElementById('clearSearch');
clearFilter.onclick=function(){
  filter.value="";
  ibom.setFilter(filter.value);
}


const bomCheckboxes = document.getElementById('bomCheckboxes');
bomCheckboxes.oninput=function(){
  ibom.setBomCheckboxes(bomCheckboxes.value);
}

const removeBOMEntries = document.getElementById('removeBOMEntries');
removeBOMEntries.oninput=function(){
  ibom.setRemoveBOMEntries(removeBOMEntries.value);
}

const additionalAttributes = document.getElementById('additionalAttributes');
additionalAttributes.oninput=function(){
  ibom.setAdditionalAttributes(additionalAttributes.value);
}

const fl_btn = document.getElementById('fl-btn');
fl_btn.onclick=function(){
  ibom.changeCanvasLayout('F');
}

const fb_btn = document.getElementById('fb-btn');
fb_btn.onclick=function(){
  ibom.changeCanvasLayout('FB');
}


const bl_btn = document.getElementById('bl-btn');
bl_btn.onclick=function(){
  ibom.changeCanvasLayout('B');
}

const bom_btn = document.getElementById('bom-btn');
bom_btn.onclick=function(){
  ibom.changeBomLayout('BOM')
}

const lr_btn = document.getElementById('lr-btn');
lr_btn.onclick=function(){
  ibom.changeBomLayout('LR')
}

const tb_btn = document.getElementById('tb-btn');
tb_btn.onclick=function(){
  ibom.changeBomLayout('TB')
}
},{"./global.js":1,"./ibom.js":3,"./render.js":6}],3:[function(require,module,exports){
/* DOM manipulation and misc code */


var Split = require('../vender/split.js')
var globalData = require('./global.js')
var render = require('./render.js')
var pcb    = require('./pcb.js')


//TODO:  GLOBAL VARIABLE REFACTOR
var filter = "";
function getFilter(input) {
  return filter;
}

function setFilter(input) {
  filter = input.toLowerCase();
  populateBomTable();
}

function dbg(html) {
  dbgdiv.innerHTML = html;
}

function setDarkMode(value) {
  if (value) {
    topmostdiv.classList.add("dark");
  } else {
    topmostdiv.classList.remove("dark");
  }
  globalData.writeStorage("darkmode", value);
  render.redrawCanvas(allcanvas.front);
  render.redrawCanvas(allcanvas.back);
}

function createCheckboxChangeHandler(checkbox, bomentry) {
    return function() 
    {
        if(bomentry.checkboxes.get(checkbox))
        {
            bomentry.checkboxes.set(checkbox,false);
            globalData.writeStorage("checkbox" + "_" + checkbox.toLowerCase() + "_" + bomentry.reference, "false");
        }
        else
        {
            bomentry.checkboxes.set(checkbox,true);
             globalData.writeStorage("checkbox" + "_" + checkbox.toLowerCase() + "_" + bomentry.reference, "true");
        }
      // Save currently highlited row
      rowid = globalData.getCurrentHighlightedRowId()
      // Redraw the canvas
      render.redrawCanvas(allcanvas.front);
      render.redrawCanvas(allcanvas.back);
      // Redraw the BOM table
      populateBomTable();
      // Render current row so its highlighted
      document.getElementById(rowid).classList.add("highlighted");
      // Set current selected row global variable
      globalData.setCurrentHighlightedRowId(rowid);
      // If highlighted then a special color will be used for the part.
      render.drawHighlights(IsCheckboxClicked(globalData.getCurrentHighlightedRowId(), "placed"));
    }
}

function createRowHighlightHandler(rowid, refs) {
  return function() {
    if (globalData.getCurrentHighlightedRowId()) {
      if (globalData.getCurrentHighlightedRowId() == rowid) {
        return;
      }
      document.getElementById(globalData.getCurrentHighlightedRowId()).classList.remove("highlighted");
    }
    document.getElementById(rowid).classList.add("highlighted");
    globalData.setCurrentHighlightedRowId(rowid);
    globalData.setHighlightedRefs(refs);
    // If highlighted then a special color will be used for the part.
    render.drawHighlights(IsCheckboxClicked(globalData.getCurrentHighlightedRowId(), "placed"));
  }
}

function entryMatches(part) {
  // check refs
  if (part.reference.toLowerCase().indexOf(getFilter()) >= 0) {
      return true;
    }
  // check value
  if (part.value.toLowerCase().indexOf(getFilter())>= 0) {
    return true;
  }
  // check footprint
  if (part.package.toLowerCase().indexOf(getFilter())>= 0) {
    return true;
  }

  // Check the displayed attributes
  var additionalAttributes = globalData.getAdditionalAttributes().split(',');
  additionalAttributes     = additionalAttributes.filter(function(e){return e});
  for (var x of additionalAttributes) {
      // remove beginning and trailing whitespace
      x = x.trim()
      if (part.attributes.has(x)) {
        if(part.attributes.get(x).indexOf(getFilter()) >= 0){
          return true;
        }
      }
    }

  return false;
}


function highlightFilter(s) {
  if (!getFilter()) {
    return s;
  }
  var parts = s.toLowerCase().split(getFilter());
  if (parts.length == 1) {
    return s;
  }
  var r = "";
  var pos = 0;
  for (var i in parts) {
    if (i > 0) {
      r += '<mark class="highlight">' +
        s.substring(pos, pos + getFilter().length) +
        '</mark>';
      pos += getFilter().length;
    }
    r += s.substring(pos, pos + parts[i].length);
    pos += parts[i].length;
  }
  return r;
}

function createColumnHeader(name, cls, comparator) {
  var th = document.createElement("TH");
  th.innerHTML = name;
  th.classList.add(cls);
  th.style.cursor = "pointer";
  var span = document.createElement("SPAN");
  span.classList.add("sortmark");
  span.classList.add("none");
  th.appendChild(span);
  th.onclick = function() {
    if (globalData.getCurrentSortColumn() && this !== globalData.getCurrentSortColumn()) 
    {
      // Currently sorted by another column
      globalData.getCurrentSortColumn().childNodes[1].classList.remove(globalData.getCurrentSortOrder());
      globalData.getCurrentSortColumn().childNodes[1].classList.add("none");
      globalData.setCurrentSortColumn(null);
      globalData.setCurrentSortOrder(null);
    }

    if (globalData.getCurrentSortColumn() && this === globalData.getCurrentSortColumn()) 
    {
      // Already sorted by this column
      if (globalData.getCurrentSortOrder() == "asc") 
      {
        // Sort by this column, descending order
        globalData.setBomSortFunction(function(a, b) 
        {
          return -comparator(a, b);
        });
        globalData.getCurrentSortColumn().childNodes[1].classList.remove("asc");
        globalData.getCurrentSortColumn().childNodes[1].classList.add("desc");
        globalData.setCurrentSortOrder("desc");
      } 
      else 
      {
        // Unsort
        globalData.setBomSortFunction(null);
        globalData.getCurrentSortColumn().childNodes[1].classList.remove("desc");
        globalData.getCurrentSortColumn().childNodes[1].classList.add("none");
        globalData.setCurrentSortColumn(null);
        globalData.setCurrentSortOrder(null);
      }
    } 
    else 
    {
      // Sort by this column, ascending order
      globalData.setBomSortFunction(comparator);
      globalData.setCurrentSortColumn(this);
      globalData.getCurrentSortColumn().childNodes[1].classList.remove("none");
      globalData.getCurrentSortColumn().childNodes[1].classList.add("asc");
      globalData.setCurrentSortOrder("asc");
    }
    populateBomBody();
  }
  return th;
}

// Describes how to sort checkboxes
function CheckboxCompare(stringName)
{
  return (partA, partB) => {
          if (partA.checkboxes.get(stringName) && !partB.checkboxes.get(stringName)) 
          {
              return  1;
          }
          else if (!partA.checkboxes.get(stringName) && partB.checkboxes.get(stringName)) 
          {
            return -1;
          } 
          else
          {
              return 0;
          }
        }
}

// Describes hoe to sort by attributes
function AttributeCompare(stringName)
{
  return (partA, partB) => {
          if (partA.attributes.get(stringName) != partB.attributes.get(stringName)) return  partA.attributes.get(stringName) > partB.attributes.get(stringName) ? 1 : -1;
          else return 0;
        }
}

function populateLayerHeader()
{
    while (layerhead.firstChild) 
    {
      layerhead.removeChild(layerhead.firstChild);
    }

    // Header row
    var tr = document.createElement("TR");
    // Defines the
    var th = document.createElement("TH");

    th.classList.add("visiableCol");

    var tr2 = document.createElement("TR");
    var thf = document.createElement("TH");
    var thb = document.createElement("TH");

    thf.innerHTML = "Front"
    thb.innerHTML = "Back"
    tr2.appendChild(thf)
    tr2.appendChild(thb)

    th.innerHTML = "Visible";
    th.colSpan = 2
    var span = document.createElement("SPAN");
    span.classList.add("none");
    th.appendChild(span);
    tr.appendChild(th);

    th = document.createElement("TH");
    th.innerHTML = "Layer";
    th.rowSpan = 2
    var span = document.createElement("SPAN");
    span.classList.add("none");
    th.appendChild(span);
    tr.appendChild(th);

    layerhead.appendChild(tr);
    layerhead.appendChild(tr2);




}

function createLayerCheckboxChangeHandler(layerEntry, isFront) {
    return function() 
    {
        if(isFront)
        { 
           
            if(layerEntry.visible_front)
            {
                pcb.SetLayerVisibility(layerEntry.name, isFront, false);
                globalData.writeStorage("checkbox_layer_front_" + layerEntry.name + "_visible", "false");
            }
            else
            {
                pcb.SetLayerVisibility(layerEntry.name, isFront, true);
                globalData.writeStorage("checkbox_layer_front_" + layerEntry.name + "_visible", "true");
            }
        }
        else
        {
            if(layerEntry.visible_back)
            {
                pcb.SetLayerVisibility(layerEntry.name, isFront, false);
                globalData.writeStorage("checkbox_layer_back_" + layerEntry.name + "_visible", "false");
            }
            else
            {
                pcb.SetLayerVisibility(layerEntry.name, isFront, true);
                globalData.writeStorage("checkbox_layer_back_" + layerEntry.name + "_visible", "true");
            }
        }
            render.redrawCanvas(allcanvas.front);
            render.redrawCanvas(allcanvas.back);
    }
}


function populateLayerBody() 
{

    var layertable =  pcb.GetLayers();

    for (var i of layertable) 
    {
        var tr = document.createElement("TR");
        var td = document.createElement("TD");
        var input_front = document.createElement("input");
        var input_back = document.createElement("input");
        input_front.type = "checkbox";
        input_back.type = "checkbox";
        // Assumes that all layers are visible by default.
        if (    (globalData.readStorage( "checkbox_layer_front_" + i.name + "_visible" ) == "true")
             || (globalData.readStorage( "checkbox_layer_front_" + i.name + "_visible" ) == null)
           )
        {
           pcb.SetLayerVisibility(i.name, true, true);
           input_front.checked = true;
        }
        else
        {
          pcb.SetLayerVisibility(i.name, true, false);
          input_front.checked = false;
        }


        if (    (globalData.readStorage( "checkbox_layer_back_" + i.name + "_visible" ) == "true")
             || (globalData.readStorage( "checkbox_layer_back_" + i.name + "_visible" ) == null)
           )
        {
           pcb.SetLayerVisibility(i.name, false, true);
           input_back.checked = true;
        }
        else
        {
          pcb.SetLayerVisibility(i.name, false, false);
          input_back.checked = false;
        }

        
        input_front.onchange = createLayerCheckboxChangeHandler(i, true);
        input_back.onchange  = createLayerCheckboxChangeHandler(i, false);
        td.appendChild(input_front);
        tr.appendChild(td);

        td = document.createElement("TD");
        td.appendChild(input_back);
        tr.appendChild(td);

        // Layer
        td = document.createElement("TD");
        td.innerHTML = i.name;
        tr.appendChild(td);
        
        layerbody.appendChild(tr);
    }
}

function populateBomHeader() 
{
  while (bomhead.firstChild)
  {
    bomhead.removeChild(bomhead.firstChild);
  }
  
  var tr = document.createElement("TR");
  var th = document.createElement("TH");
  th.classList.add("numCol");
  tr.appendChild(th);


  var additionalCheckboxes = globalData.getBomCheckboxes().split(",");
  additionalCheckboxes     = additionalCheckboxes.filter(function(e){return e});
  globalData.setCheckboxes(additionalCheckboxes);
  for (var x2 of additionalCheckboxes) {
      // remove beginning and trailing whitespace
      x2 = x2.trim()
      if (x2) 
      {
        tr.appendChild(createColumnHeader(x2, "Checkboxes", CheckboxCompare(x2)));
      }
    }

  tr.appendChild(createColumnHeader("References", "References", (partA, partB) => {
      if (partA.reference != partB.reference) return partA.reference > partB.reference ? 1 : -1;
      else return 0;
  }));

  tr.appendChild(createColumnHeader("Value", "Value", (partA, partB) => {
    if (partA.value != partB.value) return partA.value > partB.value ? 1 : -1;
    else return 0;
  }));

  tr.appendChild(createColumnHeader("Footprint", "Footprint", (partA, partB) => {
    if (partA.package != partB.package) return partA.package > partB.package ? 1 : -1;
    else return 0;
  }));

  var additionalAttributes = globalData.getAdditionalAttributes().split(',');
  // Remove null, "", undefined, and 0 values
  additionalAttributes    =additionalAttributes.filter(function(e){return e});
  for (var x of additionalAttributes) {
      // remove beginning and trailing whitespace
      x = x.trim()
      if (x) 
      {
        tr.appendChild(createColumnHeader(x, "Attributes", AttributeCompare(x)));
      }
    }

  if(globalData.getCombineValues())
  {
    //XXX: This comparison function is using positive and negative implicit
    tr.appendChild(createColumnHeader("Quantity", "Quantity", (partA, partB) => {
      return partA.quantity - partB.quantity;
    }));
  }

  bomhead.appendChild(tr);

}



////////////////////////////////////////////////////////////////////////////////
// Filter functions are defined here. These let the application filter 
// elements out of the complete bom. 
//
// The filtering function should return true if the part should be filtered out
// otherwise it returns false
////////////////////////////////////////////////////////////////////////////////
function GetBOMForSideOfBoard(location){
  var result = pcb.GetBOM();
    switch (location) {
    case 'F':
      result = pcb.filterBOMTable(result, filterBOM_Front);
      break;
    case 'B':
      result = pcb.filterBOMTable(result, filterBOM_Back);
      break;
    default:
      break;
  }
  return result;
}

function filterBOM_Front(part){
  var result = true;
  if(part.location == "F"){
    result = false;
  }
  return result;
}

function filterBOM_Back(part){
  var result = true;
  if(part.location == "B"){
    result = false;
  }
  return result;
}

function filterBOM_ByAttribute(part){
  var result = false;
  var splitFilterString = globalData.getRemoveBOMEntries().split(',');
  // Remove null, "", undefined, and 0 values
  splitFilterString    = splitFilterString.filter(function(e){return e});

  if(splitFilterString.length > 0 )
  {
    for(var i of splitFilterString){
      // removing beginning and trailing whitespace
      i = i.trim()
      if(part.attributes.has(i)){
        // Id the value is an empty string then dont filter out the entry. 
        // if the value is anything then filter out the bom entry
        if(part.attributes.get(i) != "")
        {
          result = true;
        }
      }
    }
  }

  return result;
}
////////////////////////////////////////////////////////////////////////////////

function GenerateBOMTable()
{
  // Get bom table with elements for the side of board the user has selected
  var bomtableTemp = GetBOMForSideOfBoard(globalData.getCanvasLayout());

  // Apply attribute filter to board
  bomtableTemp = pcb.filterBOMTable(bomtableTemp, filterBOM_ByAttribute);

  // If the parts are displayed one per line (not combined values), then the the bom table needs to be flattened. 
  // By default the data in the json file is combined
  bomtable = globalData.getCombineValues() ? pcb.GetBOMCombinedValues(bomtableTemp) : bomtableTemp;

  return bomtable;
}

function populateBomBody() {
  while (bom.firstChild) {
    bom.removeChild(bom.firstChild);
  }
  globalData.setHighlightHandlers([]);
  globalData.setCurrentHighlightedRowId(null);
  var first = true;

  bomtable = GenerateBOMTable();

  if (globalData.getBomSortFunction()) {
    bomtable = bomtable.slice().sort(globalData.getBomSortFunction());
  }
  for (var i in bomtable) {
    var bomentry = bomtable[i];
    var references = bomentry.reference;

    // remove entries that do not match filter
    if (getFilter() != "")
    {
        if(!entryMatches(bomentry))
        {
          continue;
        }
    }
    
    
    // Hide placed parts option is set
    if(globalData.getHidePlacedParts())
    {
        // Remove entries that have been placed. Check the placed parameter
        if(globalData.readStorage( "checkbox" + "_" + "placed" + "_" + bomentry.reference ) == "true")
        {
           continue;
        }
    }


    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var rownum = +i + 1;
    tr.id = "bomrow" + rownum;
    td.textContent = rownum;
    tr.appendChild(td);

    // Checkboxes
    var additionalCheckboxes = globalData.getBomCheckboxes().split(",");
    for (var checkbox of additionalCheckboxes) 
    {
      checkbox = checkbox.trim();
      if (checkbox) 
      {
        td = document.createElement("TD");
        var input = document.createElement("input");
        input.type = "checkbox";
        input.onchange = createCheckboxChangeHandler(checkbox, bomentry);
        // read the value in from local storage

        if(globalData.readStorage( "checkbox" + "_" + checkbox.toLowerCase() + "_" + bomentry.reference ) == "true")
        {
             bomentry.checkboxes.set(checkbox,true)
        }
        else
        {
          bomentry.checkboxes.set(checkbox,false)
        }

        if(bomentry.checkboxes.get(checkbox))
        {
          input.checked = true;
        }
        else
        {
          input.checked = false;
        }

        td.appendChild(input);
        tr.appendChild(td);
      }
    }



    //INFO: The lines below add the control the columns on the bom table
    // References
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(references);
    tr.appendChild(td);
    // Value
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(bomentry.value);
    tr.appendChild(td);
    // Footprint
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(bomentry.package);
    tr.appendChild(td);
    
    // Attributes
    var additionalAttributes = globalData.getAdditionalAttributes().split(',');
    for (var x of additionalAttributes) {
      x = x.trim()
      if (x) {
        td = document.createElement("TD");
        td.innerHTML = highlightFilter(pcb.getAttributeValue(bomentry, x.toLowerCase()));
        tr.appendChild(td);
      }
    }

    if(globalData.getCombineValues())
    {

      td = document.createElement("TD");
      td.textContent = bomentry.quantity;
      tr.appendChild(td);
    }
    bom.appendChild(tr);


    bom.appendChild(tr);
    var handler = createRowHighlightHandler(tr.id, references);
    tr.onmousemove = handler;
    globalData.pushHighlightHandlers({
      id: tr.id,
      handler: handler,
      refs: references
    });
    if (getFilter() && first) {
      handler();
      first = false;
    }
  }
}

function highlightPreviousRow() {
  if (!globalData.getCurrentHighlightedRowId()) {
    globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].handler();
  } else {
    if (globalData.getHighlightHandlers().length > 1 &&
      globalData.getHighlightHandlers()[0].id == globalData.getCurrentHighlightedRowId()) {
      globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].handler();
    } else {
      for (var i = 0; i < globalData.getHighlightHandlers().length - 1; i++) {
        if (globalData.getHighlightHandlers()[i + 1].id == globalData.getCurrentHighlightedRowId()) {
          globalData.getHighlightHandlers()[i].handler();
          break;
        }
      }
    }
  }
  render.smoothScrollToRow(globalData.getCurrentHighlightedRowId());
}

function highlightNextRow() {
  if (!globalData.getCurrentHighlightedRowId()) {
    globalData.getHighlightHandlers()[0].handler();
  } else {
    if (globalData.getHighlightHandlers().length > 1 &&
      globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].id == globalData.getCurrentHighlightedRowId()) {
      globalData.getHighlightHandlers()[0].handler();
    } else {
      for (var i = 1; i < globalData.getHighlightHandlers().length; i++) {
        if (globalData.getHighlightHandlers()[i - 1].id == globalData.getCurrentHighlightedRowId()) {
          globalData.getHighlightHandlers()[i].handler();
          break;
        }
      }
    }
  }
  smoothScrollToRow(globalData.getCurrentHighlightedRowId());
}

function populateLayerTable(){
  populateLayerHeader();
  populateLayerBody();
}

function populateBomTable() {
  populateBomHeader();
  populateBomBody();
}

function modulesClicked(references) {
  var lastClickedIndex = references.indexOf(globalData.getLastClickedRef());
  var ref = references[(lastClickedIndex + 1) % references.length];
  for (var handler of globalData.getHighlightHandlers()) {
    if (handler.refs.indexOf(ref) >= 0) {
      globalData.setLastClickedRef(ref);
      handler.handler();
      smoothScrollToRow(globalData.getCurrentHighlightedRowId());
      break;
    }
  }
}

function silkscreenVisible(visible) {
  if (visible) {
    allcanvas.front.silk.style.display = "";
    allcanvas.back.silk.style.display = "";
    globalData.writeStorage("silkscreenVisible", true);
  } else {
    allcanvas.front.silk.style.display = "none";
    allcanvas.back.silk.style.display = "none";
    globalData.writeStorage("silkscreenVisible", false);
  }
}

function changeCanvasLayout(layout) 
{
  document.getElementById("fl-btn").classList.remove("depressed");
  document.getElementById("fb-btn").classList.remove("depressed");
  document.getElementById("bl-btn").classList.remove("depressed");
  
  switch (layout) 
  {
    case 'F':
      document.getElementById("fl-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") 
      {
        globalData.collapseCanvasSplit(1);
      }
      break;
    case 'B':
      document.getElementById("bl-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") 
      {
          globalData.collapseCanvasSplit(0);
      }
      break;
    default:
      document.getElementById("fb-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") 
      {
          globalData.setSizesCanvasSplit([50, 50]);
      }
  }

  globalData.setCanvasLayout(layout);
  globalData.writeStorage("canvaslayout", layout);
  render.resizeAll();
  populateBomTable();
}

function populateMetadata() {
  var metadata  = pcb.GetMetadata();
  
  if(metadata.revision == "")
  {
    document.getElementById("title").innerHTML    = ""
    document.getElementById("revision").innerHTML = metadata.title;
  }
  else{
    document.getElementById("title").innerHTML    = metadata.title;
    document.getElementById("revision").innerHTML = "Revision: " + metadata.revision;
  }

  
  document.getElementById("company").innerHTML  = metadata.company;
  document.getElementById("filedate").innerHTML = metadata.date;
  if (metadata.title != "") {
    document.title = metadata.title + " BOM";
  }
}

function changeBomLayout(layout) {
  document.getElementById("bom-btn").classList.remove("depressed");
  document.getElementById("lr-btn").classList.remove("depressed");
  document.getElementById("tb-btn").classList.remove("depressed");
  switch (layout) 
  {
    case 'BOM':
      document.getElementById("bom-btn").classList.add("depressed");
      if (globalData.getBomSplit()) 
      {
          globalData.destroyLayerSplit();
          globalData.setLayerSplit(null);
          globalData.destroyBomSplit();
          globalData.setBomSplit(null);
          globalData.destroyCanvasSplit();
          globalData.setCanvasSplit(null);
      }
      document.getElementById("frontcanvas").style.display = "none";
      document.getElementById("backcanvas").style.display = "none";
      document.getElementById("layerdiv").style.display = "none";
      document.getElementById("bot").style.height = "";
      break;
    case 'TB':
      document.getElementById("tb-btn"     ).classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas" ).style.display = "";
      document.getElementById("layerdiv"   ).style.display = "";
      document.getElementById("bot"        ).style.height = "calc(100% - 80px)";

      console.log("TB Split")
      document.getElementById("datadiv"   ).classList.add(   "split-horizontal");
      document.getElementById("bomdiv"     ).classList.remove(   "split-horizontal");
      document.getElementById("canvasdiv"  ).classList.remove(   "split-horizontal");
      document.getElementById("frontcanvas").classList.add(   "split-horizontal");
      document.getElementById("backcanvas" ).classList.add(   "split-horizontal");
      document.getElementById("layerdiv"   ).classList.add(   "split-horizontal");


      if (globalData.getBomSplit()) {
        globalData.destroyLayerSplit();
        globalData.setLayerSplit(null);
        globalData.destroyBomSplit();
        globalData.setBomSplit(null);
        globalData.destroyCanvasSplit();
        globalData.setCanvasSplit(null);
      }

      globalData.setLayerSplit(Split(['#datadiv', '#layerdiv'], {
        sizes: [80, 20],
        onDragEnd: render.resizeAll,
        gutterSize: 5,
        cursor: 'col-resize'
      }));

      globalData.setBomSplit(Split(['#bomdiv', '#canvasdiv'], {
        direction: 'vertical',
        sizes: [50, 50],
        onDragEnd: render.resizeAll,
        gutterSize: 5,
        cursor: 'row-resize'
      }));

      globalData.setCanvasSplit(Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        gutterSize: 5,
        onDragEnd: render.resizeAll,
        cursor: 'row-resize'
      }));


      break;
    case 'LR':
      document.getElementById("lr-btn"     ).classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas" ).style.display = "";
      document.getElementById("layerdiv"   ).style.display = "";
      document.getElementById("bot"        ).style.height = "calc(100% - 80px)";

      document.getElementById("datadiv"    ).classList.add(   "split-horizontal");
      document.getElementById("bomdiv"     ).classList.add(   "split-horizontal");
      document.getElementById("canvasdiv"  ).classList.add(   "split-horizontal");
      document.getElementById("frontcanvas").classList.remove(   "split-horizontal");
      document.getElementById("backcanvas" ).classList.remove(   "split-horizontal");
      document.getElementById("layerdiv"   ).classList.add(   "split-horizontal");


      if (globalData.getBomSplit()) {
        globalData.destroyLayerSplit();
        globalData.setLayerSplit(null);
        globalData.destroyBomSplit();
        globalData.setBomSplit(null);
        globalData.destroyCanvasSplit();
        globalData.setCanvasSplit(null);
      }

      globalData.setLayerSplit(Split(['#datadiv', '#layerdiv'], {
        sizes: [80, 20],
        onDragEnd: render.resizeAll,
        gutterSize: 5,
        cursor: 'col-resize'
      }));

      globalData.setBomSplit(Split(['#bomdiv', '#canvasdiv'], {
        sizes: [50, 50],
        onDragEnd: render.resizeAll,
        gutterSize: 5,
        cursor: 'row-resize'
      }));

      globalData.setCanvasSplit(Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        direction: 'vertical',
        gutterSize: 5,
        onDragEnd: render.resizeAll,
        cursor: 'row-resize'
      }));
      break;
  }
  globalData.setBomLayout(layout);
  globalData.writeStorage("bomlayout", layout);
  changeCanvasLayout(globalData.getCanvasLayout());
}

function focusInputField(input) {
  input.scrollIntoView(false);
  input.focus();
  input.select();
}

function focusFilterField() {
  focusInputField(document.getElementById("filter"));
}

function toggleBomCheckbox(bomrowid, checkboxnum) {
  if (!bomrowid || checkboxnum > globalData.getCheckboxes().length) {
    return;
  }
  var bomrow = document.getElementById(bomrowid);
  var checkbox = bomrow.childNodes[checkboxnum].childNodes[0];
  checkbox.checked = !checkbox.checked;
  checkbox.indeterminate = false;
  checkbox.onchange();
}

function IsCheckboxClicked(bomrowid, checkboxname) 
{
    var checkboxnum = 0;
    while (checkboxnum < globalData.getCheckboxes().length && globalData.getCheckboxes()[checkboxnum].toLowerCase() != checkboxname.toLowerCase()) 
    {
      checkboxnum++;
    }
    if (!bomrowid || checkboxnum >= globalData.getCheckboxes().length) 
    {
      return;
    }
    var bomrow = document.getElementById(bomrowid);
    var checkbox = bomrow.childNodes[checkboxnum + 1].childNodes[0];
    return checkbox.checked;

}

function removeGutterNode(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].classList &&
      node.childNodes[i].classList.contains("gutter")) {
      node.removeChild(node.childNodes[i]);
      break;
    }
  }
}

function cleanGutters() {
  removeGutterNode(document.getElementById("bot"));
  removeGutterNode(document.getElementById("canvasdiv"));
}

function setBomCheckboxes(value) {
  globalData.setBomCheckboxes(value);
  globalData.writeStorage("bomCheckboxes", value);
  populateBomTable();
}

function setRemoveBOMEntries(value) {
  globalData.setRemoveBOMEntries(value);
  globalData.writeStorage("removeBOMEntries", value);
  populateBomTable();
}

function setAdditionalAttributes(value) {
  globalData.setAdditionalAttributes(value);
  globalData.writeStorage("additionalAttributes", value);
  populateBomTable();
}

// XXX: None of this seems to be working. 
document.onkeydown = function(e) {
  switch (e.key) {
    case "n":
      if (document.activeElement.type == "text") {
        return;
      }
      if (globalData.getCurrentHighlightedRowId() !== null) {
        // XXX: Why was the following line in the software
        //checkBomCheckbox(globalData.getCurrentHighlightedRowId(), "placed");
        highlightNextRow();
        e.preventDefault();
      }
      break;
    case "ArrowUp":
      highlightPreviousRow();
      e.preventDefault();
      break;
    case "ArrowDown":
      highlightNextRow();
      e.preventDefault();
      break;
    default:
      break;
  }
  if (e.altKey) {
    switch (e.key) {
      case "f":
        focusFilterField();
        e.preventDefault();
        break;
      case "z":
        changeBomLayout("BOM");
        e.preventDefault();
        break;
      case "x":
        changeBomLayout("LR");
        e.preventDefault();
        break;
      case "c":
        changeBomLayout("TB");
        e.preventDefault();
        break;
      case "v":
        changeCanvasLayout("F");
        e.preventDefault();
        break;
      case "b":
        changeCanvasLayout("FB");
        e.preventDefault();
        break;
      case "n":
        changeCanvasLayout("B");
        e.preventDefault();
        break;
      default:
        break;
    }
    if (e.key >= '1' && e.key <= '9') {
      // TODO: This might be able to be removed
      //toggleBomCheckbox(currentHighlightedRowId, parseInt(e.key));
    }
  }
}

//XXX: I would like this to be in the html functions js file. But this function needs to be 
//     placed here, otherwise the application rendering becomes very very weird.
window.onload = function(e) {
  
  // This function makes so that the user data for the pcb is converted to our internal structure
  pcb.OpenPcbData(pcbdata)

  globalData.initStorage();
  cleanGutters();
  render.initRender();
  dbgdiv = document.getElementById("dbg");
  bom = document.getElementById("bombody");
  bomhead = document.getElementById("bomhead");
  globalData.setBomLayout(globalData.readStorage("bomlayout"));
  if (!globalData.getBomLayout()) {
    globalData.setBomLayout("LR");
  }
  globalData.setCanvasLayout(globalData.readStorage("canvaslayout"));
  if (!globalData.getCanvasLayout()) {
    globalData.setCanvasLayout("FB");
  }

  populateLayerTable();


  populateMetadata();
  globalData.setBomCheckboxes(globalData.readStorage("bomCheckboxes"));
  if (globalData.getBomCheckboxes() === null) {
    globalData.setBomCheckboxes("Placed");
  }
  globalData.setRemoveBOMEntries(globalData.readStorage("removeBOMEntries"));
  if (globalData.getRemoveBOMEntries() === null) {
    globalData.setRemoveBOMEntries("");
  }
  globalData.setAdditionalAttributes(globalData.readStorage("additionalAttributes"));
  if (globalData.getAdditionalAttributes() === null) {
    globalData.setAdditionalAttributes("");
  }
  document.getElementById("bomCheckboxes").value = globalData.getBomCheckboxes();
  if (globalData.readStorage("silkscreenVisible") === "false") {
    document.getElementById("silkscreenCheckbox").checked = false;
    silkscreenVisible(false);
  }
  if (globalData.readStorage("redrawOnDrag") === "false") {
    document.getElementById("dragCheckbox").checked = false;
    globalData.setRedrawOnDrag(false);
  }
  if (globalData.readStorage("darkmode") === "true") {
    document.getElementById("darkmodeCheckbox").checked = true;
    setDarkMode(true);
  }
  if (globalData.readStorage("hidePlacedParts") === "true") {
    document.getElementById("hidePlacedParts").checked = true;
     globalData.setHidePlacedParts(true);
  }
  if (globalData.readStorage("highlightpin1") === "true") {
    document.getElementById("highlightpin1Checkbox").checked = true;
    globalData.setHighlightPin1(true);
    render.redrawCanvas(allcanvas.front);
    render.redrawCanvas(allcanvas.back);
  }
  // If this is true then combine parts and display quantity
  if (globalData.readStorage("combineValues") === "true") {
    document.getElementById("combineValues").checked = true;
    globalData.setCombineValues(true);
  }
  if (globalData.readStorage("debugMode") === "true") {
    document.getElementById("debugMode").checked = true;
     globalData.setDebugMode(true);
  }
  boardRotation = globalData.readStorage("boardRotation");
  /*
    Adjusted to match how the update rotation angle is calculated.
  */
  if (boardRotation === null) {
    boardRotation = 180;
  } else {
    boardRotation = parseInt(boardRotation);
  }
  document.getElementById("boardRotation").value = (boardRotation-180) / 5;
  document.getElementById("rotationDegree").textContent = (boardRotation-180);




  // Triggers render
  changeBomLayout(globalData.getBomLayout());


}

window.onresize = render.resizeAll;
window.matchMedia("print").addListener(render.resizeAll);

module.exports = {
  setDarkMode        , silkscreenVisible      , changeBomLayout, changeCanvasLayout,
  setBomCheckboxes   , populateBomTable       , setFilter      , getFilter         ,
  setRemoveBOMEntries, setAdditionalAttributes
}

},{"../vender/split.js":9,"./global.js":1,"./pcb.js":4,"./render.js":6}],4:[function(require,module,exports){
/*
    This file contains all of the definitions for working with pcbdata.json. 
    This file declares all of the access functions and interfaces for converting 
    the json file into an internal data structure. 
*/

/***************************************************************************************************
                                         PCB Part Interfaces
**************************************************************************************************/
// Read the ecad property. This property lets the application know what 
// ecad software generated the json file. 
function GetCADType(pcbdataStructure)
{
    if(pcbdataStructure.hasOwnProperty("ecad")){
        return pcbdataStructure.ecad;
    }
}

// This will hold the part objects. There is one entry per part
// Format of a part is as follows
// [VALUE,PACKAGE,REFRENECE DESIGNATOR, ,LOCATION, ATTRIBUTE],
// where ATTRIBUTE is a dict of ATTRIBUTE NAME : ATTRIBUTE VALUE
var BOM = [];

// Constructor for creating a part.
function Part(value, package, reference, location, attributes, checkboxes) {
    this.quantity   = 1;
    this.value      = value;
    this.package    = package;
    this.reference  = reference;
    this.location   = location;
    this.attributes = attributes;
    this.checkboxes = checkboxes;
}

function CopyPart(inputPart){
  // XXX: This is not performing a deep copy, attributes is a map and this is being copied by 
  //      reference which is not quite what we want here. It should be a deep copy so once called
  //      this will result in a completely new object that will not reference one another
  return new Part(inputPart.value, inputPart.package, inputPart.reference, inputPart.location, inputPart.attributes, inputPart.checkboxes);
}

//TODO: There should be steps here for validating the data and putting it into a 
//      format that is valid for our application
function CreateBOM(pcbdataStructure){

    // For every part in the input file, convert it to our internal 
    // representation data structure.
    for(var part of pcbdataStructure.parts)
    {
        // extract the part data. This is here so I can iterate the design 
        // when I make changes to the underlying json file.
        var value     = part.value;
        var package   = "";
        var reference = part.name;
        var location  = part.location;

        // AttributeName and AttributeValue are two strings that are deliminated by ';'. 
        // Split the strings by ';' and then zip them together
        var attributeNames  = part.attributes.name.split(';');
        var attributeValues = part.attributes.value.split(';');

        var checkboxes = new Map();

        //XXX: ASSUMTION that attributeNames is the same length as attributeValues
        attributes = new Map(); // Create a empty dictionary
        for(var i in attributeNames)
        {
            attributes.set(attributeNames[i].toLowerCase(),attributeValues[i].toLowerCase());
        }
        // Add the par to the global part array
        BOM.push(new Part(value, package, reference, location, attributes, checkboxes));
    }
}

function GetBOM(){
      return BOM;
}

// TAkes a BOM table and a filter function. The filter 
// function is used onthe provided table to remove 
// any part that satisfy the filter
function filterBOMTable(bomtable, filterFunction){
  var result = [];

  // Makes sure that thE filter function is defined. 
  // if not defined then nothing should be filtered. 
  if(filterFunction != null){
    for(var i in bomtable){
      // If the filter returns false -> do not remove part, it does not need to be filtered
      if(!filterFunction(bomtable[i])){
        result.push(CopyPart(bomtable[i]));
      }
    }
  }
  else{
    result = bomtable;
  }
  return result;
}

// Takes a bom table and combines entries that are the same
function GetBOMCombinedValues(bomtableTemp){
    result = [];

    // TODO: sort bomtableTemp. Assumption here is that the bomtableTemp is presorted

    if(bomtableTemp.length>0){
      // XXX: Assuming that the input json data has bom entries presorted
      // TODO: Start at index 1, and compare the current to the last, this should simplify the logic
      // Need to create a new object by deep copy. this is because objects by default are passed by reference and i dont 
      // want to modify them.
      result.push(CopyPart(bomtableTemp[0]));
      count = 0;
      for (var n = 1; n < bomtableTemp.length;n++)
      {
        if(result[count].value == bomtableTemp[n].value)
        {
          // For parts that are listed as combined, store the references as an array.
          // This is because the logic for highlighting needs to match strings and 
          // If an appended string is used it might not work right
          refString = result[count].reference + "," + bomtableTemp[n].reference;
          result[count].quantity += 1;
          result[count].reference = refString;
        }
        else
        {
          result.push(CopyPart(bomtableTemp[n]));
          count++;
        }
      }
    }
    return result;
}

function getAttributeValue(part, attributeToLookup){
    var attributes = part.attributes;
    var result = "";

    if(attributeToLookup == "name")
    {
      result = part.reference;
    }
    else
    {
      result = (attributes.has(attributeToLookup) ? attributes.get(attributeToLookup) : "");
    }
    // Check that the attribute exists by looking up its name. If it exists
    // the return the value for the attribute, otherwise return an empty string. 
    return result;
}


function AddCheckbox(checkboxes)
{
  return null;
}

/***************************************************************************************************
                                         PCB Metadata Interfaces
***************************************************************************************************/
var metadata;
// Constructor for creating a part.
function Metadata(title, revision, company, date) {
    this.title    = title;
    this.revision = revision;
    this.company  = company;
    this.date     = date;
}

function CreateMetadata(pcbdataStructure){
  metadata = new Metadata(pcbdataStructure.metadata.title  , pcbdataStructure.metadata.revision, 
                      pcbdataStructure.metadata.company, pcbdataStructure.metadata.date);
}

function GetMetadata(){
  return metadata;
}

/***************************************************************************************************
                                         PCB Layers Interfaces
***************************************************************************************************/
var Layers = [];

function GetLayers()
{
    return Layers
}


function PCBLayer(name)
{
    this.name    = name;
    this.visible_front = true;
    this.visible_back = true;
}

function SetLayerVisibility(layerName, isFront, visible)
{
    var layerIndex = Layers.findIndex(i => i.name === layerName)
    if(isFront)
    {
        // If item is not in the list 
        if( layerIndex !== -1)
        {
          // Layer exists. Check if visible
          Layers[layerIndex].visible_front = visible;
        }
    }
    else
    {
        // If item is not in the list 
        if( layerIndex !== -1)
        {
          // Layer exists. Check if visible
          Layers[layerIndex].visible_back = visible;
        }
    }
    
}

function CreateLayers(pcbdataStructure)
{
    // Extract layers from the trace section
    for( var trace of pcbdataStructure.board.traces)
    {
        for(var segment of trace.segments)
        {
            // Check that segment contains a layer definition
            if(segment.layer)
            {
              // If item is not in the list 
              if(Layers.findIndex(i => i.name === segment.layer) === -1)
              {
                Layers.push(new PCBLayer(segment.layer));
              }
            }
        }
    }

    // Extract layers form the layers section
    for(var layer of pcbdataStructure.board.layers)
    {
        // If item is not in the list 
        if(Layers.findIndex(i => i.name === layer.name) === -1)
        {
          // Add the par to the global part array
          Layers.push(new PCBLayer(layer.name));
        }
    }
}


function IsLayerVisible(layerName, isFront)
{
    var result = true;
    var layerIndex = Layers.findIndex(i => i.name === layerName)


    if(isFront)
    {
        // If item is not in the list 
        if( layerIndex === -1)
        {
          result = false;
        }
        else
        {
            // Layer exists. Check if visible
            result = Layers[layerIndex].visible_front;
        }
    }
    else
    {
        // If item is not in the list 
        if( layerIndex === -1)
        {
          result = false;
        }
        else
        {
            // Layer exists. Check if visible
            result = Layers[layerIndex].visible_back;
        }
    }

    return result;
}

function OpenPcbData(pcbdata)
{
    CreateBOM(pcbdata);
    CreateMetadata(pcbdata);
    CreateLayers(pcbdata);
}

module.exports = {
  OpenPcbData, GetBOM, getAttributeValue, GetBOMCombinedValues, filterBOMTable, GetMetadata, 
  AddCheckbox, GetLayers, IsLayerVisible, SetLayerVisibility
}
},{}],5:[function(require,module,exports){
var pcbFont = {
    "font_data": {
        " ": {
            "l": [],
            "w": 0.7619047619047619
        },
        "#": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.7142857142857142
                    ],
                    [
                        0.9047619047619047,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.47619047619047616,
                        -1.1428571428571428
                    ],
                    [
                        0.19047619047619047,
                        0.14285714285714285
                    ]
                ],
                [
                    [
                        0.8095238095238095,
                        -0.2857142857142857
                    ],
                    [
                        0.09523809523809523,
                        -0.2857142857142857
                    ]
                ],
                [
                    [
                        0.5238095238095237,
                        0.14285714285714285
                    ],
                    [
                        0.8095238095238095,
                        -1.1428571428571428
                    ]
                ]
            ],
            "w": 1.0
        },
        "-": {
            "l": [
                [
                    [
                        0.23809523809523814,
                        -0.42857142857142855
                    ],
                    [
                        1.0,
                        -0.42857142857142855
                    ]
                ]
            ],
            "w": 1.2380952380952381
        },
        ".": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "0": {
            "l": [
                [
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0
                    ],
                    [
                        0.6666666666666666,
                        -0.9523809523809523
                    ],
                    [
                        0.7142857142857142,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.6666666666666666
                    ],
                    [
                        0.7619047619047619,
                        -0.42857142857142855
                    ],
                    [
                        0.7142857142857142,
                        -0.23809523809523808
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.42857142857142855,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.42857142857142855
                    ],
                    [
                        0.19047619047619047,
                        -0.6666666666666666
                    ],
                    [
                        0.23809523809523808,
                        -0.8571428571428571
                    ],
                    [
                        0.2857142857142857,
                        -0.9523809523809523
                    ],
                    [
                        0.3333333333333333,
                        -1.0
                    ],
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "1": {
            "l": [
                [
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -0.9047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.8095238095238095
                    ],
                    [
                        0.19047619047619047,
                        -0.7619047619047619
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "2": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.9523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -1.0
                    ],
                    [
                        0.3333333333333333,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -1.0476190476190474
                    ],
                    [
                        0.6666666666666666,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.7619047619047619
                    ],
                    [
                        0.7142857142857142,
                        -0.6190476190476191
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "3": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.42857142857142855,
                        -0.6666666666666666
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.14285714285714285,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "4": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.42857142857142855,
                        -1.0952380952380951
                    ],
                    [
                        0.19047619047619047,
                        -0.38095238095238093
                    ],
                    [
                        0.8095238095238095,
                        -0.38095238095238093
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "5": {
            "l": [
                [
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.3333333333333333,
                        -0.6666666666666666
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        ":": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "A": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.3333333333333333
                    ],
                    [
                        0.6666666666666666,
                        -0.3333333333333333
                    ]
                ],
                [
                    [
                        0.09523809523809523,
                        -0.047619047619047616
                    ],
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "B": {
            "l": [
                [
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.7142857142857142,
                        -0.5238095238095237
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.8095238095238094,
                        -0.38095238095238093
                    ],
                    [
                        0.8095238095238094,
                        -0.23809523809523808
                    ],
                    [
                        0.7619047619047619,
                        -0.14285714285714285
                    ],
                    [
                        0.7142857142857142,
                        -0.09523809523809523
                    ],
                    [
                        0.619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -1.0476190476190474
                    ],
                    [
                        0.6666666666666665,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.7619047619047619
                    ],
                    [
                        0.7142857142857142,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666665,
                        -0.6190476190476191
                    ],
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523803,
                        -0.5714285714285714
                    ]
                ]
            ],
            "w": 1.0
        },
        "C": {
            "l": [
                [
                    [
                        0.8095238095238095,
                        -0.14285714285714285
                    ],
                    [
                        0.7619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.19047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -0.2857142857142857
                    ],
                    [
                        0.19047619047619047,
                        -0.47619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.8095238095238095
                    ],
                    [
                        0.2857142857142857,
                        -0.9047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -1.0
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0
                    ],
                    [
                        0.8095238095238095,
                        -0.9523809523809523
                    ]
                ]
            ],
            "w": 1.0
        },
        "D": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.4761904761904761,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9047619047619047
                    ],
                    [
                        0.7619047619047619,
                        -0.8095238095238095
                    ],
                    [
                        0.8095238095238094,
                        -0.6190476190476191
                    ],
                    [
                        0.8095238095238094,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.2857142857142857
                    ],
                    [
                        0.7142857142857142,
                        -0.19047619047619047
                    ],
                    [
                        0.619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.4761904761904761,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 1.0
        },
        "E": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ],
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ]
                ],
                [
                    [
                        0.7142857142857142,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "F": {
            "l": [
                [
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "G": {
            "l": [
                [
                    [
                        0.7619047619047619,
                        -1.0
                    ],
                    [
                        0.6666666666666666,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -1.0
                    ],
                    [
                        0.2857142857142857,
                        -0.9047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -0.8095238095238095
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.19047619047619047,
                        -0.47619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.2857142857142857
                    ],
                    [
                        0.2857142857142857,
                        -0.19047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.8095238095238095,
                        -0.14285714285714285
                    ],
                    [
                        0.8095238095238095,
                        -0.47619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.47619047619047616
                    ]
                ]
            ],
            "w": 1.0
        },
        "I": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "J": {
            "l": [
                [
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -0.3333333333333333
                    ],
                    [
                        0.47619047619047616,
                        -0.19047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.7619047619047619
        },
        "L": {
            "l": [
                [
                    [
                        0.7142857142857142,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "M": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -0.3333333333333333
                    ],
                    [
                        0.9047619047619047,
                        -1.0476190476190474
                    ],
                    [
                        0.9047619047619047,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 1.1428571428571428
        },
        "N": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.8095238095238094,
                        -0.047619047619047616
                    ],
                    [
                        0.8095238095238094,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.0476190476190474
        },
        "P": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0
                    ],
                    [
                        0.7619047619047619,
                        -0.9523809523809523
                    ],
                    [
                        0.8095238095238094,
                        -0.8571428571428571
                    ],
                    [
                        0.8095238095238094,
                        -0.7142857142857142
                    ],
                    [
                        0.7619047619047619,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.619047619047619,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523803,
                        -0.5238095238095237
                    ]
                ]
            ],
            "w": 1.0
        },
        "R": {
            "l": [
                [
                    [
                        0.8095238095238094,
                        -0.047619047619047616
                    ],
                    [
                        0.4761904761904761,
                        -0.5238095238095237
                    ]
                ],
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0
                    ],
                    [
                        0.7619047619047619,
                        -0.9523809523809523
                    ],
                    [
                        0.8095238095238094,
                        -0.8571428571428571
                    ],
                    [
                        0.8095238095238094,
                        -0.7142857142857142
                    ],
                    [
                        0.7619047619047619,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.619047619047619,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523803,
                        -0.5238095238095237
                    ]
                ]
            ],
            "w": 1.0
        },
        "S": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7619047619047619,
                        -0.3333333333333333
                    ],
                    [
                        0.7142857142857142,
                        -0.42857142857142855
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.5238095238095237
                    ],
                    [
                        0.38095238095238093,
                        -0.5714285714285714
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.19047619047619047,
                        -0.7619047619047619
                    ],
                    [
                        0.19047619047619047,
                        -0.8571428571428571
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -1.0
                    ],
                    [
                        0.38095238095238093,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "U": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523803,
                        -0.23809523809523808
                    ],
                    [
                        0.28571428571428564,
                        -0.14285714285714285
                    ],
                    [
                        0.33333333333333326,
                        -0.09523809523809523
                    ],
                    [
                        0.4285714285714285,
                        -0.047619047619047616
                    ],
                    [
                        0.619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.7142857142857142,
                        -0.09523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.14285714285714285
                    ],
                    [
                        0.8095238095238094,
                        -0.23809523809523808
                    ],
                    [
                        0.8095238095238094,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.0476190476190474
        },
        "V": {
            "l": [
                [
                    [
                        0.09523809523809523,
                        -1.0476190476190474
                    ],
                    [
                        0.42857142857142855,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "W": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.7619047619047619
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        1.0,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.1428571428571428
        },
        "X": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.8095238095238095,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.8095238095238095,
                        -1.0476190476190474
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "a": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.19047619047619047
                    ],
                    [
                        0.19047619047619047,
                        -0.2857142857142857
                    ],
                    [
                        0.23809523809523808,
                        -0.38095238095238093
                    ],
                    [
                        0.3333333333333333,
                        -0.42857142857142855
                    ],
                    [
                        0.5714285714285714,
                        -0.42857142857142855
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "d": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -1.0476190476190474
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "e": {
            "l": [
                [
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.19047619047619047
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.38095238095238093
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "g": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        0.19047619047619047
                    ],
                    [
                        0.5714285714285714,
                        0.23809523809523808
                    ],
                    [
                        0.47619047619047616,
                        0.2857142857142857
                    ],
                    [
                        0.3333333333333333,
                        0.2857142857142857
                    ],
                    [
                        0.23809523809523808,
                        0.23809523809523808
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "i": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.19047619047619047,
                        -1.0
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -1.0
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "k": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ],
                [
                    [
                        0.3333333333333333,
                        -0.42857142857142855
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.6190476190476191,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.3333333333333333
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "l": {
            "l": [
                [
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.5238095238095237
        },
        "n": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "o": {
            "l": [
                [
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5238095238095237
                    ],
                    [
                        0.7142857142857142,
                        -0.23809523809523808
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "r": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.5238095238095237
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.3333333333333333,
                        -0.6666666666666666
                    ],
                    [
                        0.42857142857142855,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ]
                ]
            ],
            "w": 0.6190476190476191
        },
        "s": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        -0.19047619047619047
                    ],
                    [
                        0.6190476190476191,
                        -0.23809523809523808
                    ],
                    [
                        0.5714285714285714,
                        -0.3333333333333333
                    ],
                    [
                        0.47619047619047616,
                        -0.38095238095238093
                    ],
                    [
                        0.3333333333333333,
                        -0.38095238095238093
                    ],
                    [
                        0.23809523809523808,
                        -0.42857142857142855
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.47619047619047616,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "t": {
            "l": [
                [
                    [
                        0.09523809523809523,
                        -0.7142857142857142
                    ],
                    [
                        0.47619047619047616,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.5714285714285714
        },
        "u": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "v": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -0.7142857142857142
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.7142857142857142
                    ]
                ]
            ],
            "w": 0.7619047619047619
        }
    }
}
},{}],6:[function(require,module,exports){
/* PCB rendering code */

var globalData = require('./global.js')
var render_pads = require('./render_pads.js')
var render_shapes = require('./render_shapes.js')
var pcb    = require('./pcb.js')

//REMOVE: Using to test alternate placed coloring
var isPlaced = false;




var traceColorMap = [
  "#C83232B4",
  "#CC6600C8",
  "#CC9900C8",
  "#336600C8",
  "#666633C8",
  "#FFCC33C8",
  "#669900C8",
  "#999966C8",
  "#99CC99C8",
  "#669999C8",
  "#33CC99C8",
  "#669966C8",
  "#336666C8",
  "#009966C8",
  "#006699C8",
  "#3232C8B4",
];




function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function calcFontPoint(linepoint, text, offsetx, offsety, tilt) {
  var point = [
    linepoint[0] * text.width + offsetx,
    linepoint[1] * text.height + offsety
  ];
  // Adding half a line height here is technically a bug
  // but pcbnew currently does the same, text is slightly shifted.
  point[0] -= (point[1] + text.height * 0.5) * tilt;
  return point;
}

function drawtext(ctx, text, color, flip) {
  ctx.save();
  ctx.translate(...text.pos);
  var angle = -text.angle;
  if (text.attr.includes("mirrored")) {
    ctx.scale(-1, 1);
    angle = -angle;
  }
  var tilt = 0;
  if (text.attr.includes("italic")) {
    tilt = 0.125;
  }
  var interline = (text.height * 1.5 + text.thickness) / 2;
  var txt = text.text.split("\n");
  ctx.rotate(deg2rad(angle));
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.lineWidth = text.thickness;
  for (var i in txt) {
    var offsety = (-(txt.length - 1) + i * 2) * interline + text.height / 2;
    var lineWidth = 0;
    for (var c of txt[i]) {
      lineWidth += pcbFont.font_data[c].w * text.width;
    }
    var offsetx = 0;
    switch (text.horiz_justify) {
      case -1:
        // Justify left, do nothing
        break;
      case 0:
        // Justify center
        offsetx -= lineWidth / 2;
        break;
      case 1:
        // Justify right
        offsetx -= lineWidth;
        break;
    }
    for (var c of txt[i]) {
      for (var line of pcbFont.font_data[c].l) {
        // Drawing each segment separately instead of
        // polyline because round line caps don't work in joints
        for (var i = 0; i < line.length - 1; i++) {
          ctx.beginPath();
          ctx.moveTo(...calcFontPoint(line[i], text, offsetx, offsety, tilt));
          ctx.lineTo(...calcFontPoint(line[i + 1], text, offsetx, offsety, tilt));
          ctx.stroke();
        }
      }
      offsetx += pcbFont.font_data[c].w * text.width;
    }
  }
  ctx.restore();
}

function drawedge(ctx, scalefactor, edge, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1 / scalefactor, edge.width);
  ctx.lineCap = "round";

  if (edge.pathtype == "line") 
  {
    // https://www.w3schools.com/tags/canvas_moveto.asp
    ctx.beginPath();
    ctx.moveTo(edge.x0, edge.y0);
    ctx.lineTo(edge.x1, edge.y1);
    ctx.stroke();
  }
  if (edge.pathtype == "arc") 
  {
    // https://www.w3schools.com/tags/canvas_arc.asp
    ctx.beginPath();
    ctx.arc( edge.cx0, edge.cy0, edge.radius, deg2rad(edge.angle0), deg2rad(edge.angle1));
    ctx.stroke();
  }
}

function drawPolygons(ctx, color, polygon, color) 
{
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    ctx.beginPath();
    var first = 1;
    for (var vertex of polygon) 
    {
        if(first)
        {
            if(vertex.pathtype == "line")
            {
                ctx.moveTo(vertex.x0, vertex.y0);
                ctx.lineTo(vertex.x1, vertex.y1);
            }
            else
            {
              
            }
            first = 0;
        }
        else
        {
          if(vertex.pathtype == "line")
            {
                ctx.lineTo(vertex.x1, vertex.y1);
            }
            else
            {
             console.log("Poly Arch")
            }
        }
        ctx.stroke();
    }
    //ctx.closePath();
    ctx.fill()

}

function drawPolygonShape(ctx, shape, color) {
  ctx.save();
  ctx.translate(...shape.pos);
  ctx.rotate(deg2rad(-shape.angle));
  drawPolygons(ctx, color, shape.polygons, ctx.fill.bind(ctx));
  ctx.restore();
}

function drawDrawing(ctx, layer, scalefactor, drawing, color) {
  if (["segment", "arc", "circle"].includes(drawing.type)) {
    drawedge(ctx, scalefactor, drawing, color);
  } else if (drawing.type == "polygon") {
    drawPolygonShape(ctx, drawing, color);
  } else {
    drawtext(ctx, drawing, color, layer == "B");
  }
}


function drawPad(ctx, pad, color, outline) 
{
    ctx.save();

    if (pad.shape == "rect") 
    {
        render_pads.Rectangle(ctx, pad, color, outline);
    } 
    else if (pad.shape == "oblong") 
    {
        render_pads.Oblong(ctx, color, pad, outline);
    } 
    else if (pad.shape == "round") 
    {
         render_pads.Round(ctx, color, pad, outline);
    } 
    else if (pad.shape == "octagon") 
    {
      render_pads.Octagon(ctx, color, pad, outline);
    } 
    else if (pad.shape == "custom") 
    {
        //drawPolygons(ctx, color, pad.polygons, ctxmethod);
    }

    ctx.restore();
}

function drawModule(ctx, layer, scalefactor, part, padcolor, outlinecolor, highlight) 
{
    if (highlight || globalData.getDebugMode()) 
    {
        // draw bounding box
        if (part.location == layer) 
        {
            ctx.save();
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = padcolor;
            ctx.beginPath();
            ctx.moveTo(part.package.bounding_box.x0,part.package.bounding_box.y0);
            ctx.lineTo(part.package.bounding_box.x1,part.package.bounding_box.y0);
            ctx.lineTo(part.package.bounding_box.x1,part.package.bounding_box.y1);
            ctx.lineTo(part.package.bounding_box.x0,part.package.bounding_box.y1);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = padcolor;
            ctx.moveTo(part.package.bounding_box.x0,part.package.bounding_box.y0);
            ctx.lineTo(part.package.bounding_box.x1,part.package.bounding_box.y0);
            ctx.lineTo(part.package.bounding_box.x1,part.package.bounding_box.y1);
            ctx.lineTo(part.package.bounding_box.x0,part.package.bounding_box.y1);
            ctx.stroke();
            ctx.restore();

        }
    }

/*
    // draw drawings
    for (var drawing of module.drawings) 
    {
        if (drawing.layer == layer) 
        {
          drawDrawing(ctx, layer, scalefactor, drawing.drawing, padcolor);
        }
    }
*/
    // draw pads
    for (var pad of part.package.pads) 
    {
        /* 
            Check that part on layer should be drawn. Will draw when requested layer 
            matches the parts layer.
        
          If the part is through hole it needs to be drawn on each layer
          otherwise the part is an smd and should only be drawn on a the layer it belongs to.
        */
        if (    (pad.pad_type == "tht")
             || ((pad.pad_type == "smd") && (part.location == layer))
           )
        {
            if ((pad.pin1 == "yes") && globalData.getHighlightPin1()) 
            {
                drawPad(ctx, pad, outlinecolor, true);
            }
            else
            {
                drawPad(ctx, pad, padcolor, false);
            }
        }
    }
}

function drawEdges(canvas, scalefactor) 
{
    var ctx = canvas.getContext("2d");
    var edgecolor = getComputedStyle(topmostdiv).getPropertyValue('--pcb-edge-color');
    for (var edge of pcbdata.board.pcb_shape.edges) 
    {
        drawedge(ctx, scalefactor, edge, edgecolor);
    }
}

function drawModules(canvas, layer, scalefactor, highlightedRefs) {

    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3 / scalefactor;
    var style = getComputedStyle(topmostdiv);

    var padcolor = style.getPropertyValue('--pad-color');
    var outlinecolor = style.getPropertyValue('--pin1-outline-color');
    if(globalData.getDebugMode())
    {
        padcolor     = style.getPropertyValue('--pad-color-highlight-debug');
        outlinecolor = style.getPropertyValue('--pin1-outline-color-highlight');
    }



    if (highlightedRefs.length > 0) 
    {
        if(isPlaced)
        {
            padcolor     = style.getPropertyValue('--pad-color-highlight-selected');
            outlinecolor = style.getPropertyValue('--pin1-outline-color-highlight-selected');
        }
        else
        {
            padcolor     = style.getPropertyValue('--pad-color-highlight');
            outlinecolor = style.getPropertyValue('--pin1-outline-color-highlight');
        }
    }

    for (var part of pcbdata.parts) 
    {

        var highlight = highlightedRefs.includes(part.name);
        if (highlightedRefs.length == 0 || highlight) 
        {
            drawModule(ctx, layer, scalefactor, part, padcolor, outlinecolor, highlight);
        }
    }
}


function drawTraces(canvas, layer, scalefactor)
{
    var ctx = canvas.getContext("2d");
    var isFront = (layer === "F");
    // Iterate over all traces in the design
    for (var trace of pcbdata.board.traces)
    {
        // iterate over all segments in a trace 
        for (var segment of trace.segments)
        {
           
            // lookup the color code that is assigned to the trace layer.
            // Store this for use later. 
            color = traceColorMap[segment.layer-1]
            if (["line", "arc"].includes(segment.pathtype))
            {
                if(pcb.IsLayerVisible(segment.layer, isFront))
                {
                    drawedge(ctx, scalefactor, segment,color);
                }
            }
            else if (segment.pathtype == "polygon")
            {
                // Currently not supported. The polygons don't render correctly yet.
                //drawPolygons(ctx, scalefactor, segment.segments,color);
            }
            else if( segment.pathtype == "via_round")
            {
                // Render the outer diameter
                render_shapes.Round(ctx, "#000000", segment.x, segment.y, 0, segment.diameter, 0);
                // Renders the drill hole (inner circle)
                render_shapes.Round(ctx, "#CCCCCC", segment.x, segment.y, 0, segment.drill, 0);

            }
            else if( segment.pathtype == "via_octagon")
            {

              render_shapes.Octagon(ctx, "#000000", segment.x, segment.y, 0, segment.diameter, 0);
              render_shapes.Round(ctx, "#CCCCCC", segment.x, segment.y, 0, segment.drill, 0);
            }
            else if( segment.pathtype == "via_square")
            {
              render_shapes.Square(ctx, "#000000", segment.x, segment.y, 0, segment.diameter, 0);
              render_shapes.Round(ctx, "#CCCCCC", segment.x, segment.y, 0, segment.drill, 0);
            }
            else
            {
              //drawtext(ctx, segment, "#4aa", layer == "B");
            }
        }
    }
}



function drawSilkscreen(canvas, frontOrBack, scalefactor)
{
    var ctx = canvas.getContext("2d");
    var isFront = (frontOrBack === "F");

    for (var layer of pcbdata.board.layers)
    {
        if(pcb.IsLayerVisible(layer.name, isFront))
        {
            for (var path of layer.paths)
            {
                if (["line", "arc", "circle"].includes(path.pathtype))
                {
                    drawedge(ctx, scalefactor, path, "#aa4");
                }
                else if (path.pathtype == "polygon")
                {
                    //drawPolygonShape(ctx, d, "#4aa");
                }
                else
                {
                  //drawtext(ctx, d, "#4aa", layer == "B");
                }
            }
        }
    }
}

function clearCanvas(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawHighlightsOnLayer(canvasdict) {
  clearCanvas(canvasdict.highlight);
  drawModules(canvasdict.highlight, canvasdict.layer,
    canvasdict.transform.s, globalData.getHighlightedRefs());
}

function drawHighlights(passed) 
{
  isPlaced=passed;
  drawHighlightsOnLayer(allcanvas.front);
  drawHighlightsOnLayer(allcanvas.back);
}

function drawBackground(canvasdict) {
  clearCanvas(canvasdict.bg);
  clearCanvas(canvasdict.silk);
  drawEdges(canvasdict.bg, canvasdict.transform.s);
  drawModules(canvasdict.bg, canvasdict.layer, canvasdict.transform.s, []);
  drawSilkscreen(canvasdict.silk, canvasdict.layer, canvasdict.transform.s);
  drawTraces(canvasdict.silk, canvasdict.layer, canvasdict.transform.s)
}

function prepareCanvas(canvas, flip, transform) {
  var ctx = canvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var fontsize = 1.55;
  ctx.scale(transform.zoom, transform.zoom);
  ctx.translate(transform.panx, transform.pany);
  if (flip) {
    ctx.scale(-1, 1);
  }
  ctx.translate(transform.x, transform.y);
  ctx.rotate(deg2rad(boardRotation));
  ctx.scale(transform.s, transform.s);
}

function prepareLayer(canvasdict) {
  var flip = (canvasdict.layer != "B");
  for (var c of ["bg", "silk", "highlight"]) {
    prepareCanvas(canvasdict[c], flip, canvasdict.transform);
  }
}

function rotateVector(v, angle) {
  angle = deg2rad(angle);
  return [
    v[0] * Math.cos(angle) - v[1] * Math.sin(angle),
    v[0] * Math.sin(angle) + v[1] * Math.cos(angle)
  ];
}

function applyRotation(bbox) {
  var corners = [
    [bbox.minx, bbox.miny],
    [bbox.minx, bbox.maxy],
    [bbox.maxx, bbox.miny],
    [bbox.maxx, bbox.maxy],
  ];
  corners = corners.map((v) => rotateVector(v, boardRotation));
  return {
    minx: corners.reduce((a, v) => Math.min(a, v[0]), Infinity),
    miny: corners.reduce((a, v) => Math.min(a, v[1]), Infinity),
    maxx: corners.reduce((a, v) => Math.max(a, v[0]), -Infinity),
    maxy: corners.reduce((a, v) => Math.max(a, v[1]), -Infinity),
  }
}

function recalcLayerScale(canvasdict) {
  var canvasdivid = {
    "F": "frontcanvas",
    "B": "backcanvas"
  } [canvasdict.layer];
  var width = document.getElementById(canvasdivid).clientWidth * 2;
  var height = document.getElementById(canvasdivid).clientHeight * 2;
  var bbox = applyRotation(pcbdata.board.pcb_shape.bounding_box);
  var scalefactor = 0.98 * Math.min(
    width / (bbox.maxx - bbox.minx),
    height / (bbox.maxy - bbox.miny)
  );
  if (scalefactor < 0.1) {
    scalefactor = 1;
  }
  canvasdict.transform.s = scalefactor;
  var flip = (canvasdict.layer != "B");
  if (flip) {
    canvasdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor + width) * 0.5;
  } else {
    canvasdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor - width) * 0.5;
  }
  canvasdict.transform.y = -((bbox.maxy + bbox.miny) * scalefactor - height) * 0.5;
  for (var c of ["bg", "silk", "highlight"]) {
    canvas = canvasdict[c];
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = (width / 2) + "px";
    canvas.style.height = (height / 2) + "px";
  }
}

function redrawCanvas(layerdict) {
  prepareLayer(layerdict);
  drawBackground(layerdict);
  drawHighlightsOnLayer(layerdict);
}

function resizeCanvas(layerdict) {
  recalcLayerScale(layerdict);
  redrawCanvas(layerdict);
}

function resizeAll() {
  resizeCanvas(allcanvas.front);
  resizeCanvas(allcanvas.back);
}

function bboxScan(layer, x, y, transform) 
{
    var result = [];
    for (var part of pcbdata.parts) 
    {
        if (part.location == layer) 
        {
            var b = part.package.bounding_box;
            if (    (x > b.x0 )
                 && (x < b.x1 )
                 && (y > b.y0 )
                 && (y < b.y1 )
                )
            {
                console.log(part.name);
                result.push(part.name);
            }
        }
    }
    return result;
}

function handleMouseDown(e, layerdict) {
  if (e.which != 1) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  layerdict.transform.mousestartx = e.offsetX;
  layerdict.transform.mousestarty = e.offsetY;
  layerdict.transform.mousedownx = e.offsetX;
  layerdict.transform.mousedowny = e.offsetY;
  layerdict.transform.mousedown = true;
}

function smoothScrollToRow(rowid) {
  document.getElementById(rowid).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}

function modulesClicked(references) {
  var lastClickedIndex = references.indexOf(globalData.getLastClickedRef());
  var ref = references[(lastClickedIndex + 1) % references.length];
  for (var handler of globalData.getHighlightHandlers()) {
    if (handler.refs.indexOf(ref) >= 0) {
      globalData.setLastClickedRef(ref);
      handler.handler();
      smoothScrollToRow(globalData.getCurrentHighlightedRowId());
      break;
    }
  }
}


function handleMouseClick(e, layerdict) {
  var x = e.offsetX;
  var y = e.offsetY;
  var t = layerdict.transform;
  if (layerdict.layer != "B") {
    x = (2 * x / t.zoom - t.panx + t.x) / -t.s;
  } else {
    x = (2 * x / t.zoom - t.panx - t.x) / t.s;
  }
  y = (2 * y / t.zoom - t.y - t.pany) / t.s;
  var v = rotateVector([x, y], -boardRotation);
  var reflist = bboxScan(layerdict.layer, v[0], v[1], t);
  if (reflist.length > 0) {
    modulesClicked(reflist);
    drawHighlights();
  }
}

function handleMouseUp(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();
  if (e.which == 1 &&
    layerdict.transform.mousedown &&
    layerdict.transform.mousedownx == e.offsetX &&
    layerdict.transform.mousedowny == e.offsetY) {
    // This is just a click
    handleMouseClick(e, layerdict);
    layerdict.transform.mousedown = false;
    return;
  }
  if (e.which == 3) {
    // Reset pan and zoom on right click.
    layerdict.transform.panx = 0;
    layerdict.transform.pany = 0;
    layerdict.transform.zoom = 1;
    redrawCanvas(layerdict);
  } else if (!globalData.getRedrawOnDrag()) {
    redrawCanvas(layerdict);
  }
  layerdict.transform.mousedown = false;
}

function handleMouseMove(e, layerdict) {
  if (!layerdict.transform.mousedown) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  var dx = e.offsetX - layerdict.transform.mousestartx;
  var dy = e.offsetY - layerdict.transform.mousestarty;
  layerdict.transform.panx += 2 * dx / layerdict.transform.zoom;
  layerdict.transform.pany += 2 * dy / layerdict.transform.zoom;
  layerdict.transform.mousestartx = e.offsetX;
  layerdict.transform.mousestarty = e.offsetY;
  if (globalData.getRedrawOnDrag()) {
    redrawCanvas(layerdict);
  }
}

function handleMouseWheel(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();
  var t = layerdict.transform;
  var wheeldelta = e.deltaY;
  if (e.deltaMode == 1) {
    // FF only, scroll by lines
    wheeldelta *= 30;
  } else if (e.deltaMode == 2) {
    wheeldelta *= 300;
  }
  var m = Math.pow(1.1, -wheeldelta / 40);
  // Limit amount of zoom per tick.
  if (m > 2) {
    m = 2;
  } else if (m < 0.5) {
    m = 0.5;
  }
  t.zoom *= m;
  var zoomd = (1 - m) / t.zoom;
  t.panx += 2 * e.offsetX * zoomd;
  t.pany += 2 * e.offsetY * zoomd;
  redrawCanvas(layerdict);
}

function addMouseHandlers(div, layerdict) {
  div.onmouseclick = function(e){
    handleMouseClick(e, layerdict);
  }

  div.onmousedown = function(e) {
    handleMouseDown(e, layerdict);
  };
  div.onmousemove = function(e) {
    handleMouseMove(e, layerdict);
  };
  div.onmouseup = function(e) {
    handleMouseUp(e, layerdict);
  };
  div.onmouseout = function(e) {
    handleMouseUp(e, layerdict);
  }
  div.onwheel = function(e) {
    handleMouseWheel(e, layerdict);
  }
  for (var element of [div, layerdict.bg, layerdict.silk, layerdict.highlight]) {
    element.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
  }
}

function setBoardRotation(value) {
  /*
      The board when drawn by default is show rotated -180 degrees. 
      The following will add 180 degrees to what the user calculates so that the PCB
      will be drawn in the correct orientation, i.e. displayed as shown in ECAD program. 
      Internally the range of degrees is stored as 0 -> 360
  */
  boardRotation = (value * 5)+180;
  globalData.writeStorage("boardRotation", boardRotation);
  /*
      Display the correct range of degrees which is -180 -> 180. 
      The following just remaps 360 degrees to be in the range -180 -> 180.
  */
  document.getElementById("rotationDegree").textContent = (boardRotation-180);
  resizeAll();
}

function initRender() {
  allcanvas = {
    front: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
        mousestartx: 0,
        mousestarty: 0,
        mousedown: false,
      },
      bg: document.getElementById("F_bg"),
      silk: document.getElementById("F_slk"),
      highlight: document.getElementById("F_hl"),
      layer: "F",
    },
    back: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
        mousestartx: 0,
        mousestarty: 0,
        mousedown: false,
      },
      bg: document.getElementById("B_bg"),
      silk: document.getElementById("B_slk"),
      highlight: document.getElementById("B_hl"),
      layer: "B",
    }
  };
  addMouseHandlers(document.getElementById("frontcanvas"), allcanvas.front);
  addMouseHandlers(document.getElementById("backcanvas"), allcanvas.back);
}

module.exports = {
  resizeAll,
  initRender,
  redrawCanvas,
  drawHighlights,
  setBoardRotation,
  smoothScrollToRow
};
},{"./global.js":1,"./pcb.js":4,"./render_pads.js":7,"./render_shapes.js":8}],7:[function(require,module,exports){
function DrawDrillHole(guiContext, x, y, radius)
{
    /* Draw the drill hole */
    guiContext.beginPath();
    guiContext.fillStyle = "#CCCCCC";
    guiContext.strokeStyle = "#CCCCCC";
    guiContext.arc(x,y, radius, 0, 2*Math.PI);
    guiContext.fill()
}


function Rectangle(guiContext, pad, color, outline)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;


    /* 
        Draw the rectangle using low level primitives. 
        There will be 4 points, one for each corner. 

        NOTE: Using points instead of rect method for 2 reasons. 
            1) Will replace function with generic polygon function. 
            2) rect requires that points be given not based on center, but based on upper right
               position.
    */

    let x0 = -pad.dx/2;
    let y0 = -pad.dy/2;

    let x1 =  pad.dx/2;
    let y1 =  -pad.dy/2;

    let x2 =  pad.dx/2;
    let y2 =  pad.dy/2;

    let x3 =  -pad.dx/2;
    let y3 =  pad.dy/2;

    guiContext.translate(pad.x, pad.y);
    /* 
       Rotate origin based on angle given
       NOTE: compared to oblong pads, no additional modification is required
             of angle to get the angle to rotate correctly.
    */
    guiContext.rotate((pad.angle)*Math.PI/180);

    guiContext.beginPath();
    guiContext.moveTo(x0,y0);
    guiContext.lineTo(x1,y1);
    guiContext.lineTo(x2,y2);
    guiContext.lineTo(x3,y3);
    guiContext.closePath();
    guiContext.fill()


    if(pad.pad_type == "tht")
    {
        DrawDrillHole(guiContext, 0, 0, pad.drill/2)
    }

    guiContext.restore();
}

/*
    An oblong pad can be thought of as having a rectangular middle with two semicircle ends. 

    EagleCAD provides provides three pieces of information for generating these pads. 
        1) Center point = Center of part
        2) Diameter = distance from center point to edge of semicircle
        3) Elongation =% ratio relating diameter to width

    The design also has 4 points of  interest, each representing the 
    corner of the rectangle. 

    To render the length and width are derived. This is divided in half to get the 
    values used to translate the central point to one of the verticies. 

*/
function Oblong(guiContext, color, pad, ctxmethod)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    
    // Diameter is the disnce from center of pad to tip of circle
    // elongation is a factor that related the diameter to the width
    // This is the total width
    let width   = pad.diameter*pad.elongation/100;
    
    // THe width of the rectangle is the diameter -half the radius.
    // See documentation on how these are calculated.
    let height  = (pad.diameter-width/2)*2;

    /* Center point of top half circle */
    let cx0 = 0
    let cy0 = -height/2;

    /* Center point of lower half circle */
    let cx1 = 0;
    let cy1 = height/2;

    let radius = width/2;

    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */

    /* Move origin to center of part of pad */
    guiContext.translate(pad.x, pad.y);
    /* 
       Rotate origin based on angle given
       NOTE: For some reason EagleCAD items are rotated by 90 degrees by default. 
             This corrects for that so items are displayed correctly.
             This seems to also only be required for oblong pads. This is most likely due to the 
             arc functions used.
    */
    guiContext.rotate((pad.angle-90)*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();
    /* Draw top half circle */
    guiContext.arc(cx0,cy0,radius, Math.PI,0 , );
    /* Draw the lower half circle */
    guiContext.arc(cx1,cy1,radius, 0, Math.PI );
    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    /* Only draw drill hole if tht type pad */
    if(pad.pad_type == "tht")
    {
        /* first two arguments are 0 since since the canvas was translated to the center 
           of pad. 
        
            NOTE: Assumes that drill hole is in center of pad.
         */
        DrawDrillHole(guiContext, 0, 0, pad.drill/2)
    }
    
    
    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}

function Round(guiContext, color, pad, ctxmethod)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */


    /* Move origin to center of part of pad */
    guiContext.translate(pad.x, pad.y);
    guiContext.rotate(pad.angle*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();
    /* Draw top half circle */
    guiContext.arc(0,0,pad.diameter/2, 0 , 2*Math.PI );
    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    if(pad.pad_type == "tht")
    {
        DrawDrillHole(guiContext, 0, 0, pad.drill/2)
    }
    
    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}

// X & y = center of polygon
// r = polygon
function DrawPolygon(guiContext, cx, cy, r, numberSides)
{
    let i = 0;
    let n = numberSides;
    guiContext.lineTo(cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n));
    for ( i = 1; i <= n; i++) 
    {
        guiContext.lineTo(cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n));
    }
}

function Octagon(guiContext, color, pad, ctxmethod)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */


    /* Move origin to center of part of pad */
    guiContext.translate(pad.x, pad.y);
    /* 
        Rotate by angle and add an additional 45/2 degrees. This is because the
        points on an octagon are based on based with the original point being at x=0. To rotate 
        so that the middle of one side is displayed correctly. 

        See the attached documentation on octagon geometry.


    */
    guiContext.rotate((pad.angle+45/2)*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();

    /* Translated origin to center of rectangle. So x & y here shall be 0 */
    let x = 0;
    let y = 0;
    let r = pad.diameter/2;

    DrawPolygon(guiContext,x, y, r ,8);

    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    /* Only draw drill hole if tht type pad */
    if(pad.pad_type == "tht")
    {
        /* Draw the drill hole */
        guiContext.beginPath();
        guiContext.fillStyle = "#CCCCCC";
        guiContext.strokeStyle = "#CCCCCC";
        guiContext.arc(0,0, pad.drill/2, 0, 2*Math.PI);
        guiContext.fill()
    }
    
    
    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}





module.exports = {
  Rectangle, Oblong, Round, Octagon
}

},{}],8:[function(require,module,exports){
// X & y = center of polygon
// r = polygon
function DrawPolygon(guiContext, cx, cy, r, numberSides)
{
    let i = 0;
    let n = numberSides;
    guiContext.lineTo(cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n));
    for ( i = 1; i <= n; i++) 
    {
        guiContext.lineTo(cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n));
    }
}

function Rectangle(guiContext, pad, color, fill)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;


    /* 
        Draw the rectangle using low level primitives. 
        There will be 4 points, one for each corner. 

        NOTE: Using points instead of rect method for 2 reasons. 
            1) Will replace function with generic polygon function. 
            2) rect requires that points be given not based on center, but based on upper right
               position.
    */

    let x0 = -pad.dx/2;
    let y0 = -pad.dy/2;

    let x1 =  pad.dx/2;
    let y1 =  -pad.dy/2;

    let x2 =  pad.dx/2;
    let y2 =  pad.dy/2;

    let x3 =  -pad.dx/2;
    let y3 =  pad.dy/2;

    guiContext.translate(pad.x, pad.y);
    /* 
       Rotate origin based on angle given
       NOTE: compared to oblong pads, no additional modification is required
             of angle to get the angle to rotate correctly.
    */
    guiContext.rotate((pad.angle)*Math.PI/180);

    guiContext.beginPath();
    guiContext.moveTo(x0,y0);
    guiContext.lineTo(x1,y1);
    guiContext.lineTo(x2,y2);
    guiContext.lineTo(x3,y3);
    guiContext.closePath();
    guiContext.fill()

    guiContext.restore();
}

function Round(guiContext, color, x, y, angle, diameter, fill)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */


    /* Move origin to center of part of pad */
    guiContext.translate(x, y);
    guiContext.rotate(angle*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();
    /* Draw top half circle */
    guiContext.arc(0,0,diameter/2, 0 , 2*Math.PI );
    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}

function Octagon(guiContext, color, x, y, angle, diameter, fill)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */


    /* Move origin to center of part of pad */
    guiContext.translate(x,y);
    /* 
        Rotate by angle and add an additional 45/2 degrees. This is because the
        points on an octagon are based on based with the original point being at x=0. To rotate 
        so that the middle of one side is displayed correctly. 

        See the attached documentation on octagon geometry.


    */
    guiContext.rotate((angle+45/2)*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();

    /* Translated origin to center of rectangle. So x & y here shall be 0 */
    let r = diameter/2;

    DrawPolygon(guiContext,0, 0, r ,8);

    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}


function Square(guiContext, color, x, y, angle, diameter, fill)
{
    guiContext.save();
    guiContext.fillStyle = color;
    guiContext.strokeStyle = color;
    /*
        The following only really needs to draw two semicircles as internally the semicircles will 
        attach to each other to create the completed object.
     */


    /* Move origin to center of part of pad */
    guiContext.translate(x,y);
    /* 
        Rotate by angle and add an additional 45/2 degrees. This is because the
        points on an octagon are based on based with the original point being at x=0. To rotate 
        so that the middle of one side is displayed correctly. 

        See the attached documentation on octagon geometry.


    */
    guiContext.rotate((22.5+45/2)*Math.PI/180);
    /* Start new path */
    guiContext.beginPath();

    /* Translated origin to center of rectangle. So x & y here shall be 0 */
    let r = diameter/2;

    DrawPolygon(guiContext,0, 0, r ,4);

    /* Close the path. */
    guiContext.closePath();
    /* Fill rectangle with specified color */
    guiContext.fill()

    // Restores context to state prior to this rendering function being called. 
    guiContext.restore();
}




module.exports = {
  Rectangle, Round, Octagon, Square
}

},{}],9:[function(require,module,exports){
/*
  Split.js - v1.3.5
  MIT License
  https://github.com/nathancahill/Split.js
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Split=t()}(this,function(){"use strict";var e=window,t=e.document,n="addEventListener",i="removeEventListener",r="getBoundingClientRect",s=function(){return!1},o=e.attachEvent&&!e[n],a=["","-webkit-","-moz-","-o-"].filter(function(e){var n=t.createElement("div");return n.style.cssText="width:"+e+"calc(9px)",!!n.style.length}).shift()+"calc",l=function(e){return"string"==typeof e||e instanceof String?t.querySelector(e):e};return function(u,c){function z(e,t,n){var i=A(y,t,n);Object.keys(i).forEach(function(t){return e.style[t]=i[t]})}function h(e,t){var n=B(y,t);Object.keys(n).forEach(function(t){return e.style[t]=n[t]})}function f(e){var t=E[this.a],n=E[this.b],i=t.size+n.size;t.size=e/this.size*i,n.size=i-e/this.size*i,z(t.element,t.size,this.aGutterSize),z(n.element,n.size,this.bGutterSize)}function m(e){var t;this.dragging&&((t="touches"in e?e.touches[0][b]-this.start:e[b]-this.start)<=E[this.a].minSize+M+this.aGutterSize?t=E[this.a].minSize+this.aGutterSize:t>=this.size-(E[this.b].minSize+M+this.bGutterSize)&&(t=this.size-(E[this.b].minSize+this.bGutterSize)),f.call(this,t),c.onDrag&&c.onDrag())}function g(){var e=E[this.a].element,t=E[this.b].element;this.size=e[r]()[y]+t[r]()[y]+this.aGutterSize+this.bGutterSize,this.start=e[r]()[G]}function d(){var t=this,n=E[t.a].element,r=E[t.b].element;t.dragging&&c.onDragEnd&&c.onDragEnd(),t.dragging=!1,e[i]("mouseup",t.stop),e[i]("touchend",t.stop),e[i]("touchcancel",t.stop),t.parent[i]("mousemove",t.move),t.parent[i]("touchmove",t.move),delete t.stop,delete t.move,n[i]("selectstart",s),n[i]("dragstart",s),r[i]("selectstart",s),r[i]("dragstart",s),n.style.userSelect="",n.style.webkitUserSelect="",n.style.MozUserSelect="",n.style.pointerEvents="",r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",t.gutter.style.cursor="",t.parent.style.cursor=""}function S(t){var i=this,r=E[i.a].element,o=E[i.b].element;!i.dragging&&c.onDragStart&&c.onDragStart(),t.preventDefault(),i.dragging=!0,i.move=m.bind(i),i.stop=d.bind(i),e[n]("mouseup",i.stop),e[n]("touchend",i.stop),e[n]("touchcancel",i.stop),i.parent[n]("mousemove",i.move),i.parent[n]("touchmove",i.move),r[n]("selectstart",s),r[n]("dragstart",s),o[n]("selectstart",s),o[n]("dragstart",s),r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",i.gutter.style.cursor=j,i.parent.style.cursor=j,g.call(i)}function v(e){e.forEach(function(t,n){if(n>0){var i=F[n-1],r=E[i.a],s=E[i.b];r.size=e[n-1],s.size=t,z(r.element,r.size,i.aGutterSize),z(s.element,s.size,i.bGutterSize)}})}function p(){F.forEach(function(e){e.parent.removeChild(e.gutter),E[e.a].element.style[y]="",E[e.b].element.style[y]=""})}void 0===c&&(c={});var y,b,G,E,w=l(u[0]).parentNode,D=e.getComputedStyle(w).flexDirection,U=c.sizes||u.map(function(){return 100/u.length}),k=void 0!==c.minSize?c.minSize:100,x=Array.isArray(k)?k:u.map(function(){return k}),L=void 0!==c.gutterSize?c.gutterSize:10,M=void 0!==c.snapOffset?c.snapOffset:30,O=c.direction||"horizontal",j=c.cursor||("horizontal"===O?"ew-resize":"ns-resize"),C=c.gutter||function(e,n){var i=t.createElement("div");return i.className="gutter gutter-"+n,i},A=c.elementStyle||function(e,t,n){var i={};return"string"==typeof t||t instanceof String?i[e]=t:i[e]=o?t+"%":a+"("+t+"% - "+n+"px)",i},B=c.gutterStyle||function(e,t){return n={},n[e]=t+"px",n;var n};"horizontal"===O?(y="width","clientWidth",b="clientX",G="left","paddingLeft"):"vertical"===O&&(y="height","clientHeight",b="clientY",G="top","paddingTop");var F=[];return E=u.map(function(e,t){var i,s={element:l(e),size:U[t],minSize:x[t]};if(t>0&&(i={a:t-1,b:t,dragging:!1,isFirst:1===t,isLast:t===u.length-1,direction:O,parent:w},i.aGutterSize=L,i.bGutterSize=L,i.isFirst&&(i.aGutterSize=L/2),i.isLast&&(i.bGutterSize=L/2),"row-reverse"===D||"column-reverse"===D)){var a=i.a;i.a=i.b,i.b=a}if(!o&&t>0){var c=C(t,O);h(c,L),c[n]("mousedown",S.bind(i)),c[n]("touchstart",S.bind(i)),w.insertBefore(c,s.element),i.gutter=c}0===t||t===u.length-1?z(s.element,s.size,L/2):z(s.element,s.size,L);var f=s.element[r]()[y];return f<s.minSize&&(s.minSize=f),t>0&&F.push(i),s}),o?{setSizes:v,destroy:p}:{setSizes:v,getSizes:function(){return E.map(function(e){return e.size})},collapse:function(e){if(e===F.length){var t=F[e-1];g.call(t),o||f.call(t,t.size-t.bGutterSize)}else{var n=F[e];g.call(n),o||f.call(n,n.aGutterSize)}},destroy:p}}});

},{}]},{},[5,3,6,2,4,9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2xvYmFsLmpzIiwic3JjL2h0bWxGdW5jdGlvbnMuanMiLCJzcmMvaWJvbS5qcyIsInNyYy9wY2IuanMiLCJzcmMvcGNiZm9udC5qcyIsInNyYy9yZW5kZXIuanMiLCJzcmMvcmVuZGVyX3BhZHMuanMiLCJzcmMvcmVuZGVyX3NoYXBlcy5qcyIsInZlbmRlci9zcGxpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2wrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbndCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgQm9hcmQgUm90YXRpb24gICAgICAgICAgICAgICAgICAgIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgc3RvcmFnZVxyXG52YXIgc3RvcmFnZVByZWZpeCA9ICdJTlRFUkFDVElWRV9QQ0JfXycgKyBwY2JkYXRhLm1ldGFkYXRhLnRpdGxlICsgJ19fJyArIHBjYmRhdGEubWV0YWRhdGEucmV2aXNpb24gKyAnX18nXHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmFnZSAoa2V5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsYW5rXCIpO1xyXG4gICAgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJTdG9yYWdlIGluaXQgZXJyb3JcIik7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Ugbm90IGF2YWlsYWJsZVxyXG4gIH1cclxuICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmxhbmtcIik7XHJcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIHNlc3Npb25TdG9yYWdlIGFsc28gbm90IGF2YWlsYWJsZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFN0b3JhZ2Uoa2V5KSB7XHJcbiAgaWYgKHN0b3JhZ2UpIHtcclxuICAgIHJldHVybiBzdG9yYWdlLmdldEl0ZW0oc3RvcmFnZVByZWZpeCArICcjJyArIGtleSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVTdG9yYWdlKGtleSwgdmFsdWUpIHtcclxuICBpZiAoc3RvcmFnZSkge1xyXG4gICAgc3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VQcmVmaXggKyAnIycgKyBrZXksIHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgIEhpZ2hsaWdodGVkIFJlZnMgICAgICAgICAgICAgICAgICAgIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgaGlnaGxpZ2h0ZWRSZWZzID0gW107XHJcblxyXG5mdW5jdGlvbiBzZXRIaWdobGlnaHRlZFJlZnMocmVmcyl7XHJcbiAgICBoaWdobGlnaHRlZFJlZnMgPSByZWZzLnNwbGl0KCcsJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkUmVmcygpe1xyXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkUmVmcztcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICBSZWRyYXcgT24gRHJhZyAgICAgICAgICAgICAgICAgICAgICBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHJlZHJhd09uRHJhZyA9IHRydWU7XHJcblxyXG4gIFxyXG5mdW5jdGlvbiBzZXRSZWRyYXdPbkRyYWcodmFsdWUpe1xyXG4gICAgcmVkcmF3T25EcmFnID0gdmFsdWU7XHJcbiAgICB3cml0ZVN0b3JhZ2UoXCJyZWRyYXdPbkRyYWdcIiwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWRyYXdPbkRyYWcoKXtcclxuICAgIHJldHVybiByZWRyYXdPbkRyYWc7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICBEZWJ1ZyBNb2RlICAgICAgICAgICAgICAgICAgICAgICBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGRlYnVnTW9kZSA9IGZhbHNlO1xyXG5cclxuICBcclxuZnVuY3Rpb24gc2V0RGVidWdNb2RlKHZhbHVlKXtcclxuICAgIGRlYnVnTW9kZSA9IHZhbHVlO1xyXG4gICAgd3JpdGVTdG9yYWdlKFwiZGVidWdNb2RlXCIsIHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGVidWdNb2RlKCl7XHJcbiAgICByZXR1cm4gZGVidWdNb2RlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxubGF5ZXIgU3BsaXRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGxheWVyc3BsaXQ7XHJcblxyXG5mdW5jdGlvbiBzZXRMYXllclNwbGl0KHZhbHVlKXtcclxuICAgIGxheWVyc3BsaXQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGF5ZXJTcGxpdCgpe1xyXG4gICAgcmV0dXJuIGxheWVyc3BsaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lMYXllclNwbGl0KCl7XHJcbiAgICBsYXllcnNwbGl0LmRlc3Ryb3koKVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5CT00gU3BsaXRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGJvbXNwbGl0O1xyXG5cclxuZnVuY3Rpb24gc2V0Qm9tU3BsaXQodmFsdWUpe1xyXG4gICAgYm9tc3BsaXQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9tU3BsaXQoKXtcclxuICAgIHJldHVybiBib21zcGxpdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveUJvbVNwbGl0KCl7XHJcbiAgICBib21zcGxpdC5kZXN0cm95KClcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNhbnZhcyBTcGxpdFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgY2FudmFzc3BsaXQ7XHJcblxyXG5mdW5jdGlvbiBzZXRDYW52YXNTcGxpdCh2YWx1ZSl7XHJcbiAgICBjYW52YXNzcGxpdCA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDYW52YXNTcGxpdCgpe1xyXG4gICAgcmV0dXJuIGNhbnZhc3NwbGl0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95Q2FudmFzU3BsaXQoKXtcclxuICAgIGNhbnZhc3NwbGl0LmRlc3Ryb3koKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsYXBzZUNhbnZhc1NwbGl0KHZhbHVlKVxyXG57XHJcbiAgICBjYW52YXNzcGxpdC5jb2xsYXBzZSh2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNpemVzQ2FudmFzU3BsaXQodmFsdWUpe1xyXG4gICAgY2FudmFzc3BsaXQuc2V0U2l6ZXMoWzUwLCA1MF0pO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ2FudmFzIExheW91dFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgY2FudmFzbGF5b3V0ID0gXCJGQlwiO1xyXG5cclxuLypYWFggRm91bmQgYSBidWcgYXQgc3RhcnR1cC4gQ29kZSBhc3N1bWVzIHRoYXQgY2FudmFzIGxheW91dCBcclxuaXMgaW4gb25lIG9mIHRocmVlIHN0YXRlcy4gdGhlbiBzeXN0ZW0gZmFpbHMuIGhlIGJ1ZyB3YXMgdGhhdCB0aGUgXHJcbmNhbnZhc0xheW91dCB3YXMgYmVpbmcgc2V0IHRvICdkZWZhdWx0JyB3aGljaCBpcyBub3QgYSB2YWxpZCBzdGF0ZS4gXHJcblNvIG5vIGlzIGNoZWNrIHRoYXQgaWYgZGVmYXVsdCBpcyBzZW50IGluIHRoZW4gc2V0IHRoZSBsYXlvdXQgdG8gRkIgbW9kZS5cclxuKi9cclxuLyogVE9ETzogTWFrZSB0aGUgZGVmYXVsdCBjaGVjayBiZWxvdyBhY3R1YWxseSBjaGVjayB0aGF0IHRoZSBpdGVtIFxyXG5pcyBpbiBvbmUgb2YgdGhlIHRocmVlIHZhbGlkIHN0YXRlcy4gSWYgbm90IHRoZW4gc2V0IHRvIEZCLCBvdGhlcndpc2Ugc2V0IHRvIG9uZSBvZlxyXG50aGUgdGhyZWUgdmFsaWQgc3RhdGVzXHJcbiovXHJcbmZ1bmN0aW9uIHNldENhbnZhc0xheW91dCh2YWx1ZSl7XHJcbiAgICBpZih2YWx1ZSA9PSAnZGVmYXVsdCcpe1xyXG4gICAgICAgIGNhbnZhc2xheW91dCA9ICdGQidcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhbnZhc2xheW91dCA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDYW52YXNMYXlvdXQoKXtcclxuICAgIHJldHVybiBjYW52YXNsYXlvdXQ7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5CT00gTGF5b3V0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBib21sYXlvdXQgPSBcImRlZmF1bHRcIjtcclxuXHJcbmZ1bmN0aW9uIHNldEJvbUxheW91dCh2YWx1ZSl7XHJcbiAgICBib21sYXlvdXQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9tTGF5b3V0KCl7XHJcbiAgICByZXR1cm4gYm9tbGF5b3V0O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQk9NIFNvcnQgRnVuY3Rpb25cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGJvbVNvcnRGdW5jdGlvbiA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBzZXRCb21Tb3J0RnVuY3Rpb24odmFsdWUpe1xyXG4gICAgYm9tU29ydEZ1bmN0aW9uID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJvbVNvcnRGdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGJvbVNvcnRGdW5jdGlvbjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkN1cnJlbnQgU29ydCBDb2x1bW5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGN1cnJlbnRTb3J0Q29sdW1uID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRTb3J0Q29sdW1uKHZhbHVlKXtcclxuICAgIGN1cnJlbnRTb3J0Q29sdW1uID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRTb3J0Q29sdW1uKCl7XHJcbiAgICByZXR1cm4gY3VycmVudFNvcnRDb2x1bW47XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5DdXJyZW50IFNvcnQgT3JkZXJcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGN1cnJlbnRTb3J0T3JkZXIgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFNvcnRPcmRlcih2YWx1ZSl7XHJcbiAgICBjdXJyZW50U29ydE9yZGVyID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRTb3J0T3JkZXIoKXtcclxuICAgIHJldHVybiBjdXJyZW50U29ydE9yZGVyO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ3VycmVudCBIaWdobGlnaHRlZCBSb3cgSURcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGN1cnJlbnRIaWdobGlnaHRlZFJvd0lkO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQodmFsdWUpe1xyXG4gICAgY3VycmVudEhpZ2hsaWdodGVkUm93SWQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKXtcclxuICAgIHJldHVybiBjdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkhpZ2hsaWdodCBIYW5kbGVyc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgaGlnaGxpZ2h0SGFuZGxlcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNldEhpZ2hsaWdodEhhbmRsZXJzKHZhbHVlcyl7XHJcbiAgICBoaWdobGlnaHRIYW5kbGVycyA9IHZhbHVlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKXtcclxuICAgIHJldHVybiBoaWdobGlnaHRIYW5kbGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaEhpZ2hsaWdodEhhbmRsZXJzKHZhbHVlKXtcclxuICAgIGhpZ2hsaWdodEhhbmRsZXJzLnB1c2godmFsdWUpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ2hlY2tib3hlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgY2hlY2tib3hlcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2V0Q2hlY2tib3hlcyh2YWx1ZXMpe1xyXG4gICAgY2hlY2tib3hlcyA9IHZhbHVlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hlY2tib3hlcygpe1xyXG4gICAgcmV0dXJuIGNoZWNrYm94ZXM7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5CT00gQ2hlY2tib3hlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgYm9tQ2hlY2tib3hlcyA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRCb21DaGVja2JveGVzKHZhbHVlcyl7XHJcbiAgICBib21DaGVja2JveGVzID0gdmFsdWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCb21DaGVja2JveGVzKCl7XHJcbiAgICByZXR1cm4gYm9tQ2hlY2tib3hlcztcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuUmVtb3ZlIEJPTSBFbnRyaWVzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciByZW1vdmVCT01FbnRyaWVzID0gXCJcIjtcclxuXHJcbmZ1bmN0aW9uIHNldFJlbW92ZUJPTUVudHJpZXModmFsdWVzKXtcclxuICAgIHJlbW92ZUJPTUVudHJpZXMgPSB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlbW92ZUJPTUVudHJpZXMoKXtcclxuICAgIHJldHVybiByZW1vdmVCT01FbnRyaWVzO1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuUmVtb3ZlIEJPTSBFbnRyaWVzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRBZGRpdGlvbmFsQXR0cmlidXRlcyh2YWx1ZXMpe1xyXG4gICAgYWRkaXRpb25hbEF0dHJpYnV0ZXMgPSB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKCl7XHJcbiAgICByZXR1cm4gYWRkaXRpb25hbEF0dHJpYnV0ZXM7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5IaWdobGlnaHQgUGluIDFcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGhpZ2hsaWdodHBpbjEgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHNldEhpZ2hsaWdodFBpbjEodmFsdWUpIHtcclxuICB3cml0ZVN0b3JhZ2UoXCJoaWdobGlnaHRwaW4xXCIsIHZhbHVlKTtcclxuICBoaWdobGlnaHRwaW4xID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpZ2hsaWdodFBpbjEoKXtcclxuICAgIHJldHVybiBoaWdobGlnaHRwaW4xO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuTGFzdCBDbGlja2VkIFJlZlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgbGFzdENsaWNrZWRSZWY7XHJcblxyXG5mdW5jdGlvbiBzZXRMYXN0Q2xpY2tlZFJlZih2YWx1ZSkge1xyXG4gICAgbGFzdENsaWNrZWRSZWYgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRSZWYoKSB7XHJcbiAgcmV0dXJuIGxhc3RDbGlja2VkUmVmO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvbWJpbmUgVmFsdWVzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBjb21iaW5lVmFsdWVzID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXRDb21iaW5lVmFsdWVzKHZhbHVlKSB7XHJcbiAgd3JpdGVTdG9yYWdlKFwiY29tYmluZVZhbHVlc1wiLCB2YWx1ZSk7XHJcbiAgY29tYmluZVZhbHVlcyA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21iaW5lVmFsdWVzKCl7XHJcbiAgICByZXR1cm4gY29tYmluZVZhbHVlcztcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db21iaW5lIFZhbHVlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgaGlkZVBsYWNlZFBhcnRzID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXRIaWRlUGxhY2VkUGFydHModmFsdWUpIHtcclxuICB3cml0ZVN0b3JhZ2UoXCJoaWRlUGxhY2VkUGFydHNcIiwgdmFsdWUpO1xyXG4gIGhpZGVQbGFjZWRQYXJ0cyA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaWRlUGxhY2VkUGFydHMoKXtcclxuICAgIHJldHVybiBoaWRlUGxhY2VkUGFydHM7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpbml0U3RvcmFnZSAgICAgICAgICAgICAgICAsIHJlYWRTdG9yYWdlICAgICAgICAgICAgICAgICwgd3JpdGVTdG9yYWdlICAgICAgICxcclxuICBzZXRIaWdobGlnaHRlZFJlZnMgICAgICAgICAsIGdldEhpZ2hsaWdodGVkUmVmcyAgICAgICAgICxcclxuICBzZXRSZWRyYXdPbkRyYWcgICAgICAgICAgICAsIGdldFJlZHJhd09uRHJhZyAgICAgICAgICAgICxcclxuICBzZXREZWJ1Z01vZGUgICAgICAgICAgICAgICAsIGdldERlYnVnTW9kZSAgICAgICAgICAgICAgICxcclxuICBzZXRCb21TcGxpdCAgICAgICAgICAgICAgICAsIGdldEJvbVNwbGl0ICAgICAgICAgICAgICAgICwgZGVzdHJveUJvbVNwbGl0ICAgICxcclxuICBzZXRMYXllclNwbGl0ICAgICAgICAgICAgICAgICwgZ2V0TGF5ZXJTcGxpdCAgICAgICAgICAgICAgICAsIGRlc3Ryb3lMYXllclNwbGl0ICAgICxcclxuICBzZXRDYW52YXNTcGxpdCAgICAgICAgICAgICAsIGdldENhbnZhc1NwbGl0ICAgICAgICAgICAgICwgZGVzdHJveUNhbnZhc1NwbGl0ICwgY29sbGFwc2VDYW52YXNTcGxpdCAsIHNldFNpemVzQ2FudmFzU3BsaXQsXHJcbiAgc2V0Q2FudmFzTGF5b3V0ICAgICAgICAgICAgLCBnZXRDYW52YXNMYXlvdXQgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tTGF5b3V0ICAgICAgICAgICAgICAgLCBnZXRCb21MYXlvdXQgICAgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tU29ydEZ1bmN0aW9uICAgICAgICAgLCBnZXRCb21Tb3J0RnVuY3Rpb24gICAgICAgICAsXHJcbiAgc2V0Q3VycmVudFNvcnRDb2x1bW4gICAgICAgLCBnZXRDdXJyZW50U29ydENvbHVtbiAgICAgICAsXHJcbiAgc2V0Q3VycmVudFNvcnRPcmRlciAgICAgICAgLCBnZXRDdXJyZW50U29ydE9yZGVyICAgICAgICAsXHJcbiAgc2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQgLCBnZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCAsXHJcbiAgc2V0SGlnaGxpZ2h0SGFuZGxlcnMgICAgICAgLCBnZXRIaWdobGlnaHRIYW5kbGVycyAgICAgICAsIHB1c2hIaWdobGlnaHRIYW5kbGVycyAsXHJcbiAgc2V0Q2hlY2tib3hlcyAgICAgICAgICAgICAgLCBnZXRDaGVja2JveGVzICAgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tQ2hlY2tib3hlcyAgICAgICAgICAgLCBnZXRCb21DaGVja2JveGVzICAgICAgICAgICAsXHJcbiAgc2V0UmVtb3ZlQk9NRW50cmllcyAgICAgICAgLCBnZXRSZW1vdmVCT01FbnRyaWVzICAgICAgICAsXHJcbiAgc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMgICAgLCBnZXRBZGRpdGlvbmFsQXR0cmlidXRlcyAgICAsXHJcbiAgc2V0SGlnaGxpZ2h0UGluMSAgICAgICAgICAgLCBnZXRIaWdobGlnaHRQaW4xICAgICAgICAgICAsXHJcbiAgc2V0TGFzdENsaWNrZWRSZWYgICAgICAgICAgLCBnZXRMYXN0Q2xpY2tlZFJlZiAgICAgICAgICAsXHJcbiAgc2V0Q29tYmluZVZhbHVlcyAgICAgICAgICAgLCBnZXRDb21iaW5lVmFsdWVzICAgICAgICAgICAsXHJcbiAgc2V0SGlkZVBsYWNlZFBhcnRzICAgICAgICAgLCBnZXRIaWRlUGxhY2VkUGFydHNcclxufTsiLCJcclxudmFyIGdsb2JhbERhdGEgPSByZXF1aXJlKCcuL2dsb2JhbC5qcycpXHJcbnZhciByZW5kZXIgICAgID0gcmVxdWlyZSgnLi9yZW5kZXIuanMnKVxyXG52YXIgaWJvbSAgICAgICA9IHJlcXVpcmUoJy4vaWJvbS5qcycpXHJcblxyXG5jb25zdCBib2FyZFJvdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkUm90YXRpb24nKTtcclxuYm9hcmRSb3RhdGlvbi5vbmlucHV0PWZ1bmN0aW9uKClcclxue1xyXG4gIHJlbmRlci5zZXRCb2FyZFJvdGF0aW9uKGJvYXJkUm90YXRpb24udmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBkYXJrTW9kZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrbW9kZUNoZWNrYm94Jyk7XHJcbmRhcmtNb2RlQm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlib20uc2V0RGFya01vZGUoZGFya01vZGVCb3guY2hlY2tlZClcclxufVxyXG5cclxuY29uc3Qgc2lsa3NjcmVlbkNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbGtzY3JlZW5DaGVja2JveCcpO1xyXG5zaWxrc2NyZWVuQ2hlY2tib3guY2hlY2tlZD1mdW5jdGlvbigpe1xyXG4gIGlib20uc2lsa3NjcmVlblZpc2libGUoc2lsa3NjcmVlbkNoZWNrYm94LmNoZWNrZWQpXHJcbn1cclxuc2lsa3NjcmVlbkNoZWNrYm94Lm9uY2hhbmdlPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5zaWxrc2NyZWVuVmlzaWJsZShzaWxrc2NyZWVuQ2hlY2tib3guY2hlY2tlZClcclxufVxyXG5cclxuY29uc3QgaGlnaGxpZ2h0cGluMUNoZWNrYm94ID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlnaGxpZ2h0cGluMUNoZWNrYm94Jyk7XHJcbmhpZ2hsaWdodHBpbjFDaGVja2JveC5vbmNoYW5nZT1mdW5jdGlvbigpe1xyXG4gIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0UGluMShoaWdobGlnaHRwaW4xQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5jb25zdCBkcmFnQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhZ0NoZWNrYm94Jyk7XHJcbmRyYWdDaGVja2JveC5jaGVja2VkPWZ1bmN0aW9uKCl7XHJcbiAgZ2xvYmFsRGF0YS5zZXRSZWRyYXdPbkRyYWcoZHJhZ0NoZWNrYm94LmNoZWNrZWQpXHJcbn1cclxuZHJhZ0NoZWNrYm94Lm9uY2hhbmdlPWZ1bmN0aW9uKCl7XHJcbiAgZ2xvYmFsRGF0YS5zZXRSZWRyYXdPbkRyYWcoZHJhZ0NoZWNrYm94LmNoZWNrZWQpXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb21iaW5lVmFsdWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWJpbmVWYWx1ZXMnKTtcclxuY29tYmluZVZhbHVlcy5vbmNoYW5nZT1mdW5jdGlvbigpe1xyXG4gIGdsb2JhbERhdGEuc2V0Q29tYmluZVZhbHVlcyhjb21iaW5lVmFsdWVzLmNoZWNrZWQpO1xyXG4gIGlib20ucG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG5cclxuY29uc3QgaGlkZVBsYWNlZFBhcnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGVQbGFjZWRQYXJ0cycpO1xyXG5oaWRlUGxhY2VkUGFydHMub25jaGFuZ2U9ZnVuY3Rpb24oKXtcclxuICBnbG9iYWxEYXRhLnNldEhpZGVQbGFjZWRQYXJ0cyhoaWRlUGxhY2VkUGFydHMuY2hlY2tlZCk7XHJcbiAgaWJvbS5wb3B1bGF0ZUJvbVRhYmxlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGRlYnVnTW9kZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1Z01vZGUnKTtcclxuZGVidWdNb2RlQm94Lm9uY2hhbmdlPWZ1bmN0aW9uKCl7XHJcbiAgZ2xvYmFsRGF0YS5zZXREZWJ1Z01vZGUoZGVidWdNb2RlQm94LmNoZWNrZWQpXHJcbiAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XHJcbmZpbHRlci5vbmlucHV0PWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5zZXRGaWx0ZXIoZmlsdGVyLnZhbHVlKVxyXG59XHJcblxyXG5jb25zdCBjbGVhckZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhclNlYXJjaCcpO1xyXG5jbGVhckZpbHRlci5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgZmlsdGVyLnZhbHVlPVwiXCI7XHJcbiAgaWJvbS5zZXRGaWx0ZXIoZmlsdGVyLnZhbHVlKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGJvbUNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9tQ2hlY2tib3hlcycpO1xyXG5ib21DaGVja2JveGVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldEJvbUNoZWNrYm94ZXMoYm9tQ2hlY2tib3hlcy52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJPTUVudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQk9NRW50cmllcycpO1xyXG5yZW1vdmVCT01FbnRyaWVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldFJlbW92ZUJPTUVudHJpZXMocmVtb3ZlQk9NRW50cmllcy52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWxBdHRyaWJ1dGVzJyk7XHJcbmFkZGl0aW9uYWxBdHRyaWJ1dGVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKGFkZGl0aW9uYWxBdHRyaWJ1dGVzLnZhbHVlKTtcclxufVxyXG5cclxuY29uc3QgZmxfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsLWJ0bicpO1xyXG5mbF9idG4ub25jbGljaz1mdW5jdGlvbigpe1xyXG4gIGlib20uY2hhbmdlQ2FudmFzTGF5b3V0KCdGJyk7XHJcbn1cclxuXHJcbmNvbnN0IGZiX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYi1idG4nKTtcclxuZmJfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUNhbnZhc0xheW91dCgnRkInKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGJsX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibC1idG4nKTtcclxuYmxfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUNhbnZhc0xheW91dCgnQicpO1xyXG59XHJcblxyXG5jb25zdCBib21fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvbS1idG4nKTtcclxuYm9tX2J0bi5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5jaGFuZ2VCb21MYXlvdXQoJ0JPTScpXHJcbn1cclxuXHJcbmNvbnN0IGxyX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsci1idG4nKTtcclxubHJfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUJvbUxheW91dCgnTFInKVxyXG59XHJcblxyXG5jb25zdCB0Yl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGItYnRuJyk7XHJcbnRiX2J0bi5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5jaGFuZ2VCb21MYXlvdXQoJ1RCJylcclxufSIsIi8qIERPTSBtYW5pcHVsYXRpb24gYW5kIG1pc2MgY29kZSAqL1xyXG5cclxuXHJcbnZhciBTcGxpdCA9IHJlcXVpcmUoJy4uL3ZlbmRlci9zcGxpdC5qcycpXHJcbnZhciBnbG9iYWxEYXRhID0gcmVxdWlyZSgnLi9nbG9iYWwuanMnKVxyXG52YXIgcmVuZGVyID0gcmVxdWlyZSgnLi9yZW5kZXIuanMnKVxyXG52YXIgcGNiICAgID0gcmVxdWlyZSgnLi9wY2IuanMnKVxyXG5cclxuXHJcbi8vVE9ETzogIEdMT0JBTCBWQVJJQUJMRSBSRUZBQ1RPUlxyXG52YXIgZmlsdGVyID0gXCJcIjtcclxuZnVuY3Rpb24gZ2V0RmlsdGVyKGlucHV0KSB7XHJcbiAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RmlsdGVyKGlucHV0KSB7XHJcbiAgZmlsdGVyID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICBwb3B1bGF0ZUJvbVRhYmxlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRiZyhodG1sKSB7XHJcbiAgZGJnZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhcmtNb2RlKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICB0b3Btb3N0ZGl2LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b3Btb3N0ZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xyXG4gIH1cclxuICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImRhcmttb2RlXCIsIHZhbHVlKTtcclxuICByZW5kZXIucmVkcmF3Q2FudmFzKGFsbGNhbnZhcy5mcm9udCk7XHJcbiAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2JveCwgYm9tZW50cnkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGJvbWVudHJ5LmNoZWNrYm94ZXMuZ2V0KGNoZWNrYm94KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvbWVudHJ5LmNoZWNrYm94ZXMuc2V0KGNoZWNrYm94LGZhbHNlKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveFwiICsgXCJfXCIgKyBjaGVja2JveC50b0xvd2VyQ2FzZSgpICsgXCJfXCIgKyBib21lbnRyeS5yZWZlcmVuY2UsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvbWVudHJ5LmNoZWNrYm94ZXMuc2V0KGNoZWNrYm94LHRydWUpO1xyXG4gICAgICAgICAgICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveFwiICsgXCJfXCIgKyBjaGVja2JveC50b0xvd2VyQ2FzZSgpICsgXCJfXCIgKyBib21lbnRyeS5yZWZlcmVuY2UsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIC8vIFNhdmUgY3VycmVudGx5IGhpZ2hsaXRlZCByb3dcclxuICAgICAgcm93aWQgPSBnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKClcclxuICAgICAgLy8gUmVkcmF3IHRoZSBjYW52YXNcclxuICAgICAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gICAgICByZW5kZXIucmVkcmF3Q2FudmFzKGFsbGNhbnZhcy5iYWNrKTtcclxuICAgICAgLy8gUmVkcmF3IHRoZSBCT00gdGFibGVcclxuICAgICAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG4gICAgICAvLyBSZW5kZXIgY3VycmVudCByb3cgc28gaXRzIGhpZ2hsaWdodGVkXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvd2lkKS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XHJcbiAgICAgIC8vIFNldCBjdXJyZW50IHNlbGVjdGVkIHJvdyBnbG9iYWwgdmFyaWFibGVcclxuICAgICAgZ2xvYmFsRGF0YS5zZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZChyb3dpZCk7XHJcbiAgICAgIC8vIElmIGhpZ2hsaWdodGVkIHRoZW4gYSBzcGVjaWFsIGNvbG9yIHdpbGwgYmUgdXNlZCBmb3IgdGhlIHBhcnQuXHJcbiAgICAgIHJlbmRlci5kcmF3SGlnaGxpZ2h0cyhJc0NoZWNrYm94Q2xpY2tlZChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCksIFwicGxhY2VkXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm93SGlnaGxpZ2h0SGFuZGxlcihyb3dpZCwgcmVmcykge1xyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSA9PSByb3dpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvd2lkKS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XHJcbiAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKHJvd2lkKTtcclxuICAgIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0ZWRSZWZzKHJlZnMpO1xyXG4gICAgLy8gSWYgaGlnaGxpZ2h0ZWQgdGhlbiBhIHNwZWNpYWwgY29sb3Igd2lsbCBiZSB1c2VkIGZvciB0aGUgcGFydC5cclxuICAgIHJlbmRlci5kcmF3SGlnaGxpZ2h0cyhJc0NoZWNrYm94Q2xpY2tlZChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCksIFwicGxhY2VkXCIpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudHJ5TWF0Y2hlcyhwYXJ0KSB7XHJcbiAgLy8gY2hlY2sgcmVmc1xyXG4gIGlmIChwYXJ0LnJlZmVyZW5jZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2V0RmlsdGVyKCkpID49IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgLy8gY2hlY2sgdmFsdWVcclxuICBpZiAocGFydC52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2V0RmlsdGVyKCkpPj0gMCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIGNoZWNrIGZvb3RwcmludFxyXG4gIGlmIChwYXJ0LnBhY2thZ2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdldEZpbHRlcigpKT49IDApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgdGhlIGRpc3BsYXllZCBhdHRyaWJ1dGVzXHJcbiAgdmFyIGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gZ2xvYmFsRGF0YS5nZXRBZGRpdGlvbmFsQXR0cmlidXRlcygpLnNwbGl0KCcsJyk7XHJcbiAgYWRkaXRpb25hbEF0dHJpYnV0ZXMgICAgID0gYWRkaXRpb25hbEF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSk7XHJcbiAgZm9yICh2YXIgeCBvZiBhZGRpdGlvbmFsQXR0cmlidXRlcykge1xyXG4gICAgICAvLyByZW1vdmUgYmVnaW5uaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlXHJcbiAgICAgIHggPSB4LnRyaW0oKVxyXG4gICAgICBpZiAocGFydC5hdHRyaWJ1dGVzLmhhcyh4KSkge1xyXG4gICAgICAgIGlmKHBhcnQuYXR0cmlidXRlcy5nZXQoeCkuaW5kZXhPZihnZXRGaWx0ZXIoKSkgPj0gMCl7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0RmlsdGVyKHMpIHtcclxuICBpZiAoIWdldEZpbHRlcigpKSB7XHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcbiAgdmFyIHBhcnRzID0gcy50b0xvd2VyQ2FzZSgpLnNwbGl0KGdldEZpbHRlcigpKTtcclxuICBpZiAocGFydHMubGVuZ3RoID09IDEpIHtcclxuICAgIHJldHVybiBzO1xyXG4gIH1cclxuICB2YXIgciA9IFwiXCI7XHJcbiAgdmFyIHBvcyA9IDA7XHJcbiAgZm9yICh2YXIgaSBpbiBwYXJ0cykge1xyXG4gICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgIHIgKz0gJzxtYXJrIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JyArXHJcbiAgICAgICAgcy5zdWJzdHJpbmcocG9zLCBwb3MgKyBnZXRGaWx0ZXIoKS5sZW5ndGgpICtcclxuICAgICAgICAnPC9tYXJrPic7XHJcbiAgICAgIHBvcyArPSBnZXRGaWx0ZXIoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByICs9IHMuc3Vic3RyaW5nKHBvcywgcG9zICsgcGFydHNbaV0ubGVuZ3RoKTtcclxuICAgIHBvcyArPSBwYXJ0c1tpXS5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb2x1bW5IZWFkZXIobmFtZSwgY2xzLCBjb21wYXJhdG9yKSB7XHJcbiAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRIXCIpO1xyXG4gIHRoLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgdGguY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gIHRoLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwic29ydG1hcmtcIik7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICB0aC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICB0aC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpICYmIHRoaXMgIT09IGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKSkgXHJcbiAgICB7XHJcbiAgICAgIC8vIEN1cnJlbnRseSBzb3J0ZWQgYnkgYW5vdGhlciBjb2x1bW5cclxuICAgICAgZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0T3JkZXIoKSk7XHJcbiAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0Q29sdW1uKG51bGwpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0T3JkZXIobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKSAmJiB0aGlzID09PSBnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0Q29sdW1uKCkpIFxyXG4gICAge1xyXG4gICAgICAvLyBBbHJlYWR5IHNvcnRlZCBieSB0aGlzIGNvbHVtblxyXG4gICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydE9yZGVyKCkgPT0gXCJhc2NcIikgXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBTb3J0IGJ5IHRoaXMgY29sdW1uLCBkZXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRCb21Tb3J0RnVuY3Rpb24oZnVuY3Rpb24oYSwgYikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIC1jb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2NcIik7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRDdXJyZW50U29ydE9yZGVyKFwiZGVzY1wiKTtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIC8vIFVuc29ydFxyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU29ydEZ1bmN0aW9uKG51bGwpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjXCIpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Q3VycmVudFNvcnRDb2x1bW4obnVsbCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRDdXJyZW50U29ydE9yZGVyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgLy8gU29ydCBieSB0aGlzIGNvbHVtbiwgYXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU29ydEZ1bmN0aW9uKGNvbXBhcmF0b3IpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0Q29sdW1uKHRoaXMpO1xyXG4gICAgICBnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0Q29sdW1uKCkuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcclxuICAgICAgZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImFzY1wiKTtcclxuICAgICAgZ2xvYmFsRGF0YS5zZXRDdXJyZW50U29ydE9yZGVyKFwiYXNjXCIpO1xyXG4gICAgfVxyXG4gICAgcG9wdWxhdGVCb21Cb2R5KCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aDtcclxufVxyXG5cclxuLy8gRGVzY3JpYmVzIGhvdyB0byBzb3J0IGNoZWNrYm94ZXNcclxuZnVuY3Rpb24gQ2hlY2tib3hDb21wYXJlKHN0cmluZ05hbWUpXHJcbntcclxuICByZXR1cm4gKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgICAgICAgaWYgKHBhcnRBLmNoZWNrYm94ZXMuZ2V0KHN0cmluZ05hbWUpICYmICFwYXJ0Qi5jaGVja2JveGVzLmdldChzdHJpbmdOYW1lKSkgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoIXBhcnRBLmNoZWNrYm94ZXMuZ2V0KHN0cmluZ05hbWUpICYmIHBhcnRCLmNoZWNrYm94ZXMuZ2V0KHN0cmluZ05hbWUpKSBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbi8vIERlc2NyaWJlcyBob2UgdG8gc29ydCBieSBhdHRyaWJ1dGVzXHJcbmZ1bmN0aW9uIEF0dHJpYnV0ZUNvbXBhcmUoc3RyaW5nTmFtZSlcclxue1xyXG4gIHJldHVybiAocGFydEEsIHBhcnRCKSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydEEuYXR0cmlidXRlcy5nZXQoc3RyaW5nTmFtZSkgIT0gcGFydEIuYXR0cmlidXRlcy5nZXQoc3RyaW5nTmFtZSkpIHJldHVybiAgcGFydEEuYXR0cmlidXRlcy5nZXQoc3RyaW5nTmFtZSkgPiBwYXJ0Qi5hdHRyaWJ1dGVzLmdldChzdHJpbmdOYW1lKSA/IDEgOiAtMTtcclxuICAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUxheWVySGVhZGVyKClcclxue1xyXG4gICAgd2hpbGUgKGxheWVyaGVhZC5maXJzdENoaWxkKSBcclxuICAgIHtcclxuICAgICAgbGF5ZXJoZWFkLnJlbW92ZUNoaWxkKGxheWVyaGVhZC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWFkZXIgcm93XHJcbiAgICB2YXIgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAvLyBEZWZpbmVzIHRoZVxyXG4gICAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRIXCIpO1xyXG5cclxuICAgIHRoLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYWJsZUNvbFwiKTtcclxuXHJcbiAgICB2YXIgdHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgdmFyIHRoZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUSFwiKTtcclxuICAgIHZhciB0aGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEhcIik7XHJcblxyXG4gICAgdGhmLmlubmVySFRNTCA9IFwiRnJvbnRcIlxyXG4gICAgdGhiLmlubmVySFRNTCA9IFwiQmFja1wiXHJcbiAgICB0cjIuYXBwZW5kQ2hpbGQodGhmKVxyXG4gICAgdHIyLmFwcGVuZENoaWxkKHRoYilcclxuXHJcbiAgICB0aC5pbm5lckhUTUwgPSBcIlZpc2libGVcIjtcclxuICAgIHRoLmNvbFNwYW4gPSAyXHJcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICAgIHRoLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGgpO1xyXG5cclxuICAgIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRIXCIpO1xyXG4gICAgdGguaW5uZXJIVE1MID0gXCJMYXllclwiO1xyXG4gICAgdGgucm93U3BhbiA9IDJcclxuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgdGguYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0aCk7XHJcblxyXG4gICAgbGF5ZXJoZWFkLmFwcGVuZENoaWxkKHRyKTtcclxuICAgIGxheWVyaGVhZC5hcHBlbmRDaGlsZCh0cjIpO1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGF5ZXJDaGVja2JveENoYW5nZUhhbmRsZXIobGF5ZXJFbnRyeSwgaXNGcm9udCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXNGcm9udClcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihsYXllckVudHJ5LnZpc2libGVfZnJvbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBjYi5TZXRMYXllclZpc2liaWxpdHkobGF5ZXJFbnRyeS5uYW1lLCBpc0Zyb250LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImNoZWNrYm94X2xheWVyX2Zyb250X1wiICsgbGF5ZXJFbnRyeS5uYW1lICsgXCJfdmlzaWJsZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGNiLlNldExheWVyVmlzaWJpbGl0eShsYXllckVudHJ5Lm5hbWUsIGlzRnJvbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveF9sYXllcl9mcm9udF9cIiArIGxheWVyRW50cnkubmFtZSArIFwiX3Zpc2libGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGxheWVyRW50cnkudmlzaWJsZV9iYWNrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwY2IuU2V0TGF5ZXJWaXNpYmlsaXR5KGxheWVyRW50cnkubmFtZSwgaXNGcm9udCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveF9sYXllcl9iYWNrX1wiICsgbGF5ZXJFbnRyeS5uYW1lICsgXCJfdmlzaWJsZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGNiLlNldExheWVyVmlzaWJpbGl0eShsYXllckVudHJ5Lm5hbWUsIGlzRnJvbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveF9sYXllcl9iYWNrX1wiICsgbGF5ZXJFbnRyeS5uYW1lICsgXCJfdmlzaWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmZyb250KTtcclxuICAgICAgICAgICAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuYmFjayk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUxheWVyQm9keSgpIFxyXG57XHJcblxyXG4gICAgdmFyIGxheWVydGFibGUgPSAgcGNiLkdldExheWVycygpO1xyXG5cclxuICAgIGZvciAodmFyIGkgb2YgbGF5ZXJ0YWJsZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICB2YXIgaW5wdXRfZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdmFyIGlucHV0X2JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXRfZnJvbnQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBpbnB1dF9iYWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgLy8gQXNzdW1lcyB0aGF0IGFsbCBsYXllcnMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cclxuICAgICAgICBpZiAoICAgIChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKCBcImNoZWNrYm94X2xheWVyX2Zyb250X1wiICsgaS5uYW1lICsgXCJfdmlzaWJsZVwiICkgPT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgICB8fCAoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZSggXCJjaGVja2JveF9sYXllcl9mcm9udF9cIiArIGkubmFtZSArIFwiX3Zpc2libGVcIiApID09IG51bGwpXHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBwY2IuU2V0TGF5ZXJWaXNpYmlsaXR5KGkubmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgaW5wdXRfZnJvbnQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwY2IuU2V0TGF5ZXJWaXNpYmlsaXR5KGkubmFtZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgaW5wdXRfZnJvbnQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICggICAgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoIFwiY2hlY2tib3hfbGF5ZXJfYmFja19cIiArIGkubmFtZSArIFwiX3Zpc2libGVcIiApID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICAgfHwgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoIFwiY2hlY2tib3hfbGF5ZXJfYmFja19cIiArIGkubmFtZSArIFwiX3Zpc2libGVcIiApID09IG51bGwpXHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBwY2IuU2V0TGF5ZXJWaXNpYmlsaXR5KGkubmFtZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgIGlucHV0X2JhY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwY2IuU2V0TGF5ZXJWaXNpYmlsaXR5KGkubmFtZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgIGlucHV0X2JhY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXRfZnJvbnQub25jaGFuZ2UgPSBjcmVhdGVMYXllckNoZWNrYm94Q2hhbmdlSGFuZGxlcihpLCB0cnVlKTtcclxuICAgICAgICBpbnB1dF9iYWNrLm9uY2hhbmdlICA9IGNyZWF0ZUxheWVyQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGksIGZhbHNlKTtcclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChpbnB1dF9mcm9udCk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG5cclxuICAgICAgICB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChpbnB1dF9iYWNrKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcblxyXG4gICAgICAgIC8vIExheWVyXHJcbiAgICAgICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgdGQuaW5uZXJIVE1MID0gaS5uYW1lO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICBcclxuICAgICAgICBsYXllcmJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUJvbUhlYWRlcigpIFxyXG57XHJcbiAgd2hpbGUgKGJvbWhlYWQuZmlyc3RDaGlsZClcclxuICB7XHJcbiAgICBib21oZWFkLnJlbW92ZUNoaWxkKGJvbWhlYWQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICB2YXIgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEhcIik7XHJcbiAgdGguY2xhc3NMaXN0LmFkZChcIm51bUNvbFwiKTtcclxuICB0ci5hcHBlbmRDaGlsZCh0aCk7XHJcblxyXG5cclxuICB2YXIgYWRkaXRpb25hbENoZWNrYm94ZXMgPSBnbG9iYWxEYXRhLmdldEJvbUNoZWNrYm94ZXMoKS5zcGxpdChcIixcIik7XHJcbiAgYWRkaXRpb25hbENoZWNrYm94ZXMgICAgID0gYWRkaXRpb25hbENoZWNrYm94ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSk7XHJcbiAgZ2xvYmFsRGF0YS5zZXRDaGVja2JveGVzKGFkZGl0aW9uYWxDaGVja2JveGVzKTtcclxuICBmb3IgKHZhciB4MiBvZiBhZGRpdGlvbmFsQ2hlY2tib3hlcykge1xyXG4gICAgICAvLyByZW1vdmUgYmVnaW5uaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlXHJcbiAgICAgIHgyID0geDIudHJpbSgpXHJcbiAgICAgIGlmICh4MikgXHJcbiAgICAgIHtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5IZWFkZXIoeDIsIFwiQ2hlY2tib3hlc1wiLCBDaGVja2JveENvbXBhcmUoeDIpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29sdW1uSGVhZGVyKFwiUmVmZXJlbmNlc1wiLCBcIlJlZmVyZW5jZXNcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgICBpZiAocGFydEEucmVmZXJlbmNlICE9IHBhcnRCLnJlZmVyZW5jZSkgcmV0dXJuIHBhcnRBLnJlZmVyZW5jZSA+IHBhcnRCLnJlZmVyZW5jZSA/IDEgOiAtMTtcclxuICAgICAgZWxzZSByZXR1cm4gMDtcclxuICB9KSk7XHJcblxyXG4gIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbHVtbkhlYWRlcihcIlZhbHVlXCIsIFwiVmFsdWVcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgaWYgKHBhcnRBLnZhbHVlICE9IHBhcnRCLnZhbHVlKSByZXR1cm4gcGFydEEudmFsdWUgPiBwYXJ0Qi52YWx1ZSA/IDEgOiAtMTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfSkpO1xyXG5cclxuICB0ci5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5IZWFkZXIoXCJGb290cHJpbnRcIiwgXCJGb290cHJpbnRcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgaWYgKHBhcnRBLnBhY2thZ2UgIT0gcGFydEIucGFja2FnZSkgcmV0dXJuIHBhcnRBLnBhY2thZ2UgPiBwYXJ0Qi5wYWNrYWdlID8gMSA6IC0xO1xyXG4gICAgZWxzZSByZXR1cm4gMDtcclxuICB9KSk7XHJcblxyXG4gIHZhciBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IGdsb2JhbERhdGEuZ2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoKS5zcGxpdCgnLCcpO1xyXG4gIC8vIFJlbW92ZSBudWxsLCBcIlwiLCB1bmRlZmluZWQsIGFuZCAwIHZhbHVlc1xyXG4gIGFkZGl0aW9uYWxBdHRyaWJ1dGVzICAgID1hZGRpdGlvbmFsQXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTtcclxuICBmb3IgKHZhciB4IG9mIGFkZGl0aW9uYWxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBiZWdpbm5pbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcclxuICAgICAgeCA9IHgudHJpbSgpXHJcbiAgICAgIGlmICh4KSBcclxuICAgICAge1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbHVtbkhlYWRlcih4LCBcIkF0dHJpYnV0ZXNcIiwgQXR0cmlidXRlQ29tcGFyZSh4KSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGlmKGdsb2JhbERhdGEuZ2V0Q29tYmluZVZhbHVlcygpKVxyXG4gIHtcclxuICAgIC8vWFhYOiBUaGlzIGNvbXBhcmlzb24gZnVuY3Rpb24gaXMgdXNpbmcgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGltcGxpY2l0XHJcbiAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5IZWFkZXIoXCJRdWFudGl0eVwiLCBcIlF1YW50aXR5XCIsIChwYXJ0QSwgcGFydEIpID0+IHtcclxuICAgICAgcmV0dXJuIHBhcnRBLnF1YW50aXR5IC0gcGFydEIucXVhbnRpdHk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBib21oZWFkLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gRmlsdGVyIGZ1bmN0aW9ucyBhcmUgZGVmaW5lZCBoZXJlLiBUaGVzZSBsZXQgdGhlIGFwcGxpY2F0aW9uIGZpbHRlciBcclxuLy8gZWxlbWVudHMgb3V0IG9mIHRoZSBjb21wbGV0ZSBib20uIFxyXG4vL1xyXG4vLyBUaGUgZmlsdGVyaW5nIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gdHJ1ZSBpZiB0aGUgcGFydCBzaG91bGQgYmUgZmlsdGVyZWQgb3V0XHJcbi8vIG90aGVyd2lzZSBpdCByZXR1cm5zIGZhbHNlXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIEdldEJPTUZvclNpZGVPZkJvYXJkKGxvY2F0aW9uKXtcclxuICB2YXIgcmVzdWx0ID0gcGNiLkdldEJPTSgpO1xyXG4gICAgc3dpdGNoIChsb2NhdGlvbikge1xyXG4gICAgY2FzZSAnRic6XHJcbiAgICAgIHJlc3VsdCA9IHBjYi5maWx0ZXJCT01UYWJsZShyZXN1bHQsIGZpbHRlckJPTV9Gcm9udCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnQic6XHJcbiAgICAgIHJlc3VsdCA9IHBjYi5maWx0ZXJCT01UYWJsZShyZXN1bHQsIGZpbHRlckJPTV9CYWNrKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyQk9NX0Zyb250KHBhcnQpe1xyXG4gIHZhciByZXN1bHQgPSB0cnVlO1xyXG4gIGlmKHBhcnQubG9jYXRpb24gPT0gXCJGXCIpe1xyXG4gICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJPTV9CYWNrKHBhcnQpe1xyXG4gIHZhciByZXN1bHQgPSB0cnVlO1xyXG4gIGlmKHBhcnQubG9jYXRpb24gPT0gXCJCXCIpe1xyXG4gICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJPTV9CeUF0dHJpYnV0ZShwYXJ0KXtcclxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAgdmFyIHNwbGl0RmlsdGVyU3RyaW5nID0gZ2xvYmFsRGF0YS5nZXRSZW1vdmVCT01FbnRyaWVzKCkuc3BsaXQoJywnKTtcclxuICAvLyBSZW1vdmUgbnVsbCwgXCJcIiwgdW5kZWZpbmVkLCBhbmQgMCB2YWx1ZXNcclxuICBzcGxpdEZpbHRlclN0cmluZyAgICA9IHNwbGl0RmlsdGVyU3RyaW5nLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pO1xyXG5cclxuICBpZihzcGxpdEZpbHRlclN0cmluZy5sZW5ndGggPiAwIClcclxuICB7XHJcbiAgICBmb3IodmFyIGkgb2Ygc3BsaXRGaWx0ZXJTdHJpbmcpe1xyXG4gICAgICAvLyByZW1vdmluZyBiZWdpbm5pbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcclxuICAgICAgaSA9IGkudHJpbSgpXHJcbiAgICAgIGlmKHBhcnQuYXR0cmlidXRlcy5oYXMoaSkpe1xyXG4gICAgICAgIC8vIElkIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcgdGhlbiBkb250IGZpbHRlciBvdXQgdGhlIGVudHJ5LiBcclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYW55dGhpbmcgdGhlbiBmaWx0ZXIgb3V0IHRoZSBib20gZW50cnlcclxuICAgICAgICBpZihwYXJ0LmF0dHJpYnV0ZXMuZ2V0KGkpICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIEdlbmVyYXRlQk9NVGFibGUoKVxyXG57XHJcbiAgLy8gR2V0IGJvbSB0YWJsZSB3aXRoIGVsZW1lbnRzIGZvciB0aGUgc2lkZSBvZiBib2FyZCB0aGUgdXNlciBoYXMgc2VsZWN0ZWRcclxuICB2YXIgYm9tdGFibGVUZW1wID0gR2V0Qk9NRm9yU2lkZU9mQm9hcmQoZ2xvYmFsRGF0YS5nZXRDYW52YXNMYXlvdXQoKSk7XHJcblxyXG4gIC8vIEFwcGx5IGF0dHJpYnV0ZSBmaWx0ZXIgdG8gYm9hcmRcclxuICBib210YWJsZVRlbXAgPSBwY2IuZmlsdGVyQk9NVGFibGUoYm9tdGFibGVUZW1wLCBmaWx0ZXJCT01fQnlBdHRyaWJ1dGUpO1xyXG5cclxuICAvLyBJZiB0aGUgcGFydHMgYXJlIGRpc3BsYXllZCBvbmUgcGVyIGxpbmUgKG5vdCBjb21iaW5lZCB2YWx1ZXMpLCB0aGVuIHRoZSB0aGUgYm9tIHRhYmxlIG5lZWRzIHRvIGJlIGZsYXR0ZW5lZC4gXHJcbiAgLy8gQnkgZGVmYXVsdCB0aGUgZGF0YSBpbiB0aGUganNvbiBmaWxlIGlzIGNvbWJpbmVkXHJcbiAgYm9tdGFibGUgPSBnbG9iYWxEYXRhLmdldENvbWJpbmVWYWx1ZXMoKSA/IHBjYi5HZXRCT01Db21iaW5lZFZhbHVlcyhib210YWJsZVRlbXApIDogYm9tdGFibGVUZW1wO1xyXG5cclxuICByZXR1cm4gYm9tdGFibGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9tQm9keSgpIHtcclxuICB3aGlsZSAoYm9tLmZpcnN0Q2hpbGQpIHtcclxuICAgIGJvbS5yZW1vdmVDaGlsZChib20uZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0SGFuZGxlcnMoW10pO1xyXG4gIGdsb2JhbERhdGEuc2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQobnVsbCk7XHJcbiAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuXHJcbiAgYm9tdGFibGUgPSBHZW5lcmF0ZUJPTVRhYmxlKCk7XHJcblxyXG4gIGlmIChnbG9iYWxEYXRhLmdldEJvbVNvcnRGdW5jdGlvbigpKSB7XHJcbiAgICBib210YWJsZSA9IGJvbXRhYmxlLnNsaWNlKCkuc29ydChnbG9iYWxEYXRhLmdldEJvbVNvcnRGdW5jdGlvbigpKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSBpbiBib210YWJsZSkge1xyXG4gICAgdmFyIGJvbWVudHJ5ID0gYm9tdGFibGVbaV07XHJcbiAgICB2YXIgcmVmZXJlbmNlcyA9IGJvbWVudHJ5LnJlZmVyZW5jZTtcclxuXHJcbiAgICAvLyByZW1vdmUgZW50cmllcyB0aGF0IGRvIG5vdCBtYXRjaCBmaWx0ZXJcclxuICAgIGlmIChnZXRGaWx0ZXIoKSAhPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCFlbnRyeU1hdGNoZXMoYm9tZW50cnkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBIaWRlIHBsYWNlZCBwYXJ0cyBvcHRpb24gaXMgc2V0XHJcbiAgICBpZihnbG9iYWxEYXRhLmdldEhpZGVQbGFjZWRQYXJ0cygpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFJlbW92ZSBlbnRyaWVzIHRoYXQgaGF2ZSBiZWVuIHBsYWNlZC4gQ2hlY2sgdGhlIHBsYWNlZCBwYXJhbWV0ZXJcclxuICAgICAgICBpZihnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKCBcImNoZWNrYm94XCIgKyBcIl9cIiArIFwicGxhY2VkXCIgKyBcIl9cIiArIGJvbWVudHJ5LnJlZmVyZW5jZSApID09IFwidHJ1ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIHZhciByb3dudW0gPSAraSArIDE7XHJcbiAgICB0ci5pZCA9IFwiYm9tcm93XCIgKyByb3dudW07XHJcbiAgICB0ZC50ZXh0Q29udGVudCA9IHJvd251bTtcclxuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuXHJcbiAgICAvLyBDaGVja2JveGVzXHJcbiAgICB2YXIgYWRkaXRpb25hbENoZWNrYm94ZXMgPSBnbG9iYWxEYXRhLmdldEJvbUNoZWNrYm94ZXMoKS5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKHZhciBjaGVja2JveCBvZiBhZGRpdGlvbmFsQ2hlY2tib3hlcykgXHJcbiAgICB7XHJcbiAgICAgIGNoZWNrYm94ID0gY2hlY2tib3gudHJpbSgpO1xyXG4gICAgICBpZiAoY2hlY2tib3gpIFxyXG4gICAgICB7XHJcbiAgICAgICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBjcmVhdGVDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tib3gsIGJvbWVudHJ5KTtcclxuICAgICAgICAvLyByZWFkIHRoZSB2YWx1ZSBpbiBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZSggXCJjaGVja2JveFwiICsgXCJfXCIgKyBjaGVja2JveC50b0xvd2VyQ2FzZSgpICsgXCJfXCIgKyBib21lbnRyeS5yZWZlcmVuY2UgKSA9PSBcInRydWVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICBib21lbnRyeS5jaGVja2JveGVzLnNldChjaGVja2JveCx0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9tZW50cnkuY2hlY2tib3hlcy5zZXQoY2hlY2tib3gsZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihib21lbnRyeS5jaGVja2JveGVzLmdldChjaGVja2JveCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvL0lORk86IFRoZSBsaW5lcyBiZWxvdyBhZGQgdGhlIGNvbnRyb2wgdGhlIGNvbHVtbnMgb24gdGhlIGJvbSB0YWJsZVxyXG4gICAgLy8gUmVmZXJlbmNlc1xyXG4gICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICB0ZC5pbm5lckhUTUwgPSBoaWdobGlnaHRGaWx0ZXIocmVmZXJlbmNlcyk7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAvLyBWYWx1ZVxyXG4gICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICB0ZC5pbm5lckhUTUwgPSBoaWdobGlnaHRGaWx0ZXIoYm9tZW50cnkudmFsdWUpO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgLy8gRm9vdHByaW50XHJcbiAgICB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIHRkLmlubmVySFRNTCA9IGhpZ2hsaWdodEZpbHRlcihib21lbnRyeS5wYWNrYWdlKTtcclxuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIFxyXG4gICAgLy8gQXR0cmlidXRlc1xyXG4gICAgdmFyIGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gZ2xvYmFsRGF0YS5nZXRBZGRpdGlvbmFsQXR0cmlidXRlcygpLnNwbGl0KCcsJyk7XHJcbiAgICBmb3IgKHZhciB4IG9mIGFkZGl0aW9uYWxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHggPSB4LnRyaW0oKVxyXG4gICAgICBpZiAoeCkge1xyXG4gICAgICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IGhpZ2hsaWdodEZpbHRlcihwY2IuZ2V0QXR0cmlidXRlVmFsdWUoYm9tZW50cnksIHgudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGdsb2JhbERhdGEuZ2V0Q29tYmluZVZhbHVlcygpKVxyXG4gICAge1xyXG5cclxuICAgICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYm9tZW50cnkucXVhbnRpdHk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIGJvbS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG5cclxuICAgIGJvbS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB2YXIgaGFuZGxlciA9IGNyZWF0ZVJvd0hpZ2hsaWdodEhhbmRsZXIodHIuaWQsIHJlZmVyZW5jZXMpO1xyXG4gICAgdHIub25tb3VzZW1vdmUgPSBoYW5kbGVyO1xyXG4gICAgZ2xvYmFsRGF0YS5wdXNoSGlnaGxpZ2h0SGFuZGxlcnMoe1xyXG4gICAgICBpZDogdHIuaWQsXHJcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXHJcbiAgICAgIHJlZnM6IHJlZmVyZW5jZXNcclxuICAgIH0pO1xyXG4gICAgaWYgKGdldEZpbHRlcigpICYmIGZpcnN0KSB7XHJcbiAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodFByZXZpb3VzUm93KCkge1xyXG4gIGlmICghZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKSB7XHJcbiAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpLmxlbmd0aCAtIDFdLmhhbmRsZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKS5sZW5ndGggPiAxICYmXHJcbiAgICAgIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVswXS5pZCA9PSBnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpW2dsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKS5sZW5ndGggLSAxXS5oYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpW2kgKyAxXS5pZCA9PSBnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgICAgIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVtpXS5oYW5kbGVyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyLnNtb290aFNjcm9sbFRvUm93KGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodE5leHRSb3coKSB7XHJcbiAgaWYgKCFnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVswXS5oYW5kbGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKCkubGVuZ3RoID4gMSAmJlxyXG4gICAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpLmxlbmd0aCAtIDFdLmlkID09IGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSkge1xyXG4gICAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbMF0uaGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpW2kgLSAxXS5pZCA9PSBnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgICAgIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVtpXS5oYW5kbGVyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc21vb3RoU2Nyb2xsVG9Sb3coZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVMYXllclRhYmxlKCl7XHJcbiAgcG9wdWxhdGVMYXllckhlYWRlcigpO1xyXG4gIHBvcHVsYXRlTGF5ZXJCb2R5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9tVGFibGUoKSB7XHJcbiAgcG9wdWxhdGVCb21IZWFkZXIoKTtcclxuICBwb3B1bGF0ZUJvbUJvZHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc0NsaWNrZWQocmVmZXJlbmNlcykge1xyXG4gIHZhciBsYXN0Q2xpY2tlZEluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGdsb2JhbERhdGEuZ2V0TGFzdENsaWNrZWRSZWYoKSk7XHJcbiAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbKGxhc3RDbGlja2VkSW5kZXggKyAxKSAlIHJlZmVyZW5jZXMubGVuZ3RoXTtcclxuICBmb3IgKHZhciBoYW5kbGVyIG9mIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKSkge1xyXG4gICAgaWYgKGhhbmRsZXIucmVmcy5pbmRleE9mKHJlZikgPj0gMCkge1xyXG4gICAgICBnbG9iYWxEYXRhLnNldExhc3RDbGlja2VkUmVmKHJlZik7XHJcbiAgICAgIGhhbmRsZXIuaGFuZGxlcigpO1xyXG4gICAgICBzbW9vdGhTY3JvbGxUb1JvdyhnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbGtzY3JlZW5WaXNpYmxlKHZpc2libGUpIHtcclxuICBpZiAodmlzaWJsZSkge1xyXG4gICAgYWxsY2FudmFzLmZyb250LnNpbGsuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICBhbGxjYW52YXMuYmFjay5zaWxrLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJzaWxrc2NyZWVuVmlzaWJsZVwiLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxsY2FudmFzLmZyb250LnNpbGsuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYWxsY2FudmFzLmJhY2suc2lsay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcInNpbGtzY3JlZW5WaXNpYmxlXCIsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc0xheW91dChsYXlvdXQpIFxyXG57XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbC1idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImRlcHJlc3NlZFwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZiLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwcmVzc2VkXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmwtYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXByZXNzZWRcIik7XHJcbiAgXHJcbiAgc3dpdGNoIChsYXlvdXQpIFxyXG4gIHtcclxuICAgIGNhc2UgJ0YnOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsLWJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRCb21MYXlvdXQoKSAhPSBcIkJPTVwiKSBcclxuICAgICAge1xyXG4gICAgICAgIGdsb2JhbERhdGEuY29sbGFwc2VDYW52YXNTcGxpdCgxKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ0InOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsLWJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRCb21MYXlvdXQoKSAhPSBcIkJPTVwiKSBcclxuICAgICAge1xyXG4gICAgICAgICAgZ2xvYmFsRGF0YS5jb2xsYXBzZUNhbnZhc1NwbGl0KDApO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYi1idG5cIikuY2xhc3NMaXN0LmFkZChcImRlcHJlc3NlZFwiKTtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tTGF5b3V0KCkgIT0gXCJCT01cIikgXHJcbiAgICAgIHtcclxuICAgICAgICAgIGdsb2JhbERhdGEuc2V0U2l6ZXNDYW52YXNTcGxpdChbNTAsIDUwXSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEuc2V0Q2FudmFzTGF5b3V0KGxheW91dCk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjYW52YXNsYXlvdXRcIiwgbGF5b3V0KTtcclxuICByZW5kZXIucmVzaXplQWxsKCk7XHJcbiAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZU1ldGFkYXRhKCkge1xyXG4gIHZhciBtZXRhZGF0YSAgPSBwY2IuR2V0TWV0YWRhdGEoKTtcclxuICBcclxuICBpZihtZXRhZGF0YS5yZXZpc2lvbiA9PSBcIlwiKVxyXG4gIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MICAgID0gXCJcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZpc2lvblwiKS5pbm5lckhUTUwgPSBtZXRhZGF0YS50aXRsZTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MICAgID0gbWV0YWRhdGEudGl0bGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmlzaW9uXCIpLmlubmVySFRNTCA9IFwiUmV2aXNpb246IFwiICsgbWV0YWRhdGEucmV2aXNpb247XHJcbiAgfVxyXG5cclxuICBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBhbnlcIikuaW5uZXJIVE1MICA9IG1ldGFkYXRhLmNvbXBhbnk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlZGF0ZVwiKS5pbm5lckhUTUwgPSBtZXRhZGF0YS5kYXRlO1xyXG4gIGlmIChtZXRhZGF0YS50aXRsZSAhPSBcIlwiKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IG1ldGFkYXRhLnRpdGxlICsgXCIgQk9NXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb21MYXlvdXQobGF5b3V0KSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib20tYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXByZXNzZWRcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsci1idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImRlcHJlc3NlZFwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRiLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwcmVzc2VkXCIpO1xyXG4gIHN3aXRjaCAobGF5b3V0KSBcclxuICB7XHJcbiAgICBjYXNlICdCT00nOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbS1idG5cIikuY2xhc3NMaXN0LmFkZChcImRlcHJlc3NlZFwiKTtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tU3BsaXQoKSkgXHJcbiAgICAgIHtcclxuICAgICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUxheWVyU3BsaXQoKTtcclxuICAgICAgICAgIGdsb2JhbERhdGEuc2V0TGF5ZXJTcGxpdChudWxsKTtcclxuICAgICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUJvbVNwbGl0KCk7XHJcbiAgICAgICAgICBnbG9iYWxEYXRhLnNldEJvbVNwbGl0KG51bGwpO1xyXG4gICAgICAgICAgZ2xvYmFsRGF0YS5kZXN0cm95Q2FudmFzU3BsaXQoKTtcclxuICAgICAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udGNhbnZhc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2NhbnZhc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF5ZXJkaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdFwiKS5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1RCJzpcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0Yi1idG5cIiAgICAgKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIiApLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxheWVyZGl2XCIgICApLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdFwiICAgICAgICApLnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gODBweClcIjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVEIgU3BsaXRcIilcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhZGl2XCIgICApLmNsYXNzTGlzdC5hZGQoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbWRpdlwiICAgICApLmNsYXNzTGlzdC5yZW1vdmUoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc2RpdlwiICApLmNsYXNzTGlzdC5yZW1vdmUoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLmNsYXNzTGlzdC5hZGQoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIiApLmNsYXNzTGlzdC5hZGQoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxheWVyZGl2XCIgICApLmNsYXNzTGlzdC5hZGQoICAgXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG5cclxuXHJcbiAgICAgIGlmIChnbG9iYWxEYXRhLmdldEJvbVNwbGl0KCkpIHtcclxuICAgICAgICBnbG9iYWxEYXRhLmRlc3Ryb3lMYXllclNwbGl0KCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRMYXllclNwbGl0KG51bGwpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUJvbVNwbGl0KCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRCb21TcGxpdChudWxsKTtcclxuICAgICAgICBnbG9iYWxEYXRhLmRlc3Ryb3lDYW52YXNTcGxpdCgpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQobnVsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsb2JhbERhdGEuc2V0TGF5ZXJTcGxpdChTcGxpdChbJyNkYXRhZGl2JywgJyNsYXllcmRpdiddLCB7XHJcbiAgICAgICAgc2l6ZXM6IFs4MCwgMjBdLFxyXG4gICAgICAgIG9uRHJhZ0VuZDogcmVuZGVyLnJlc2l6ZUFsbCxcclxuICAgICAgICBndXR0ZXJTaXplOiA1LFxyXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU3BsaXQoU3BsaXQoWycjYm9tZGl2JywgJyNjYW52YXNkaXYnXSwge1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgICAgICBzaXplczogWzUwLCA1MF0sXHJcbiAgICAgICAgb25EcmFnRW5kOiByZW5kZXIucmVzaXplQWxsLFxyXG4gICAgICAgIGd1dHRlclNpemU6IDUsXHJcbiAgICAgICAgY3Vyc29yOiAncm93LXJlc2l6ZSdcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgZ2xvYmFsRGF0YS5zZXRDYW52YXNTcGxpdChTcGxpdChbJyNmcm9udGNhbnZhcycsICcjYmFja2NhbnZhcyddLCB7XHJcbiAgICAgICAgc2l6ZXM6IFs1MCwgNTBdLFxyXG4gICAgICAgIGd1dHRlclNpemU6IDUsXHJcbiAgICAgICAgb25EcmFnRW5kOiByZW5kZXIucmVzaXplQWxsLFxyXG4gICAgICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnXHJcbiAgICAgIH0pKTtcclxuXHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ0xSJzpcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsci1idG5cIiAgICAgKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIiApLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxheWVyZGl2XCIgICApLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdFwiICAgICAgICApLnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gODBweClcIjtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YWRpdlwiICAgICkuY2xhc3NMaXN0LmFkZCggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9tZGl2XCIgICAgICkuY2xhc3NMaXN0LmFkZCggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzZGl2XCIgICkuY2xhc3NMaXN0LmFkZCggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbnRjYW52YXNcIikuY2xhc3NMaXN0LnJlbW92ZSggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2NhbnZhc1wiICkuY2xhc3NMaXN0LnJlbW92ZSggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF5ZXJkaXZcIiAgICkuY2xhc3NMaXN0LmFkZCggICBcInNwbGl0LWhvcml6b250YWxcIik7XHJcblxyXG5cclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tU3BsaXQoKSkge1xyXG4gICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUxheWVyU3BsaXQoKTtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldExheWVyU3BsaXQobnVsbCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5kZXN0cm95Qm9tU3BsaXQoKTtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJvbVNwbGl0KG51bGwpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUNhbnZhc1NwbGl0KCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRDYW52YXNTcGxpdChudWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2xvYmFsRGF0YS5zZXRMYXllclNwbGl0KFNwbGl0KFsnI2RhdGFkaXYnLCAnI2xheWVyZGl2J10sIHtcclxuICAgICAgICBzaXplczogWzgwLCAyMF0sXHJcbiAgICAgICAgb25EcmFnRW5kOiByZW5kZXIucmVzaXplQWxsLFxyXG4gICAgICAgIGd1dHRlclNpemU6IDUsXHJcbiAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgZ2xvYmFsRGF0YS5zZXRCb21TcGxpdChTcGxpdChbJyNib21kaXYnLCAnI2NhbnZhc2RpdiddLCB7XHJcbiAgICAgICAgc2l6ZXM6IFs1MCwgNTBdLFxyXG4gICAgICAgIG9uRHJhZ0VuZDogcmVuZGVyLnJlc2l6ZUFsbCxcclxuICAgICAgICBndXR0ZXJTaXplOiA1LFxyXG4gICAgICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQoU3BsaXQoWycjZnJvbnRjYW52YXMnLCAnI2JhY2tjYW52YXMnXSwge1xyXG4gICAgICAgIHNpemVzOiBbNTAsIDUwXSxcclxuICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgZ3V0dGVyU2l6ZTogNSxcclxuICAgICAgICBvbkRyYWdFbmQ6IHJlbmRlci5yZXNpemVBbGwsXHJcbiAgICAgICAgY3Vyc29yOiAncm93LXJlc2l6ZSdcclxuICAgICAgfSkpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgZ2xvYmFsRGF0YS5zZXRCb21MYXlvdXQobGF5b3V0KTtcclxuICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImJvbWxheW91dFwiLCBsYXlvdXQpO1xyXG4gIGNoYW5nZUNhbnZhc0xheW91dChnbG9iYWxEYXRhLmdldENhbnZhc0xheW91dCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNJbnB1dEZpZWxkKGlucHV0KSB7XHJcbiAgaW5wdXQuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xyXG4gIGlucHV0LmZvY3VzKCk7XHJcbiAgaW5wdXQuc2VsZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvY3VzRmlsdGVyRmllbGQoKSB7XHJcbiAgZm9jdXNJbnB1dEZpZWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQm9tQ2hlY2tib3goYm9tcm93aWQsIGNoZWNrYm94bnVtKSB7XHJcbiAgaWYgKCFib21yb3dpZCB8fCBjaGVja2JveG51bSA+IGdsb2JhbERhdGEuZ2V0Q2hlY2tib3hlcygpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgYm9tcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9tcm93aWQpO1xyXG4gIHZhciBjaGVja2JveCA9IGJvbXJvdy5jaGlsZE5vZGVzW2NoZWNrYm94bnVtXS5jaGlsZE5vZGVzWzBdO1xyXG4gIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcclxuICBjaGVja2JveC5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgY2hlY2tib3gub25jaGFuZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNDaGVja2JveENsaWNrZWQoYm9tcm93aWQsIGNoZWNrYm94bmFtZSkgXHJcbntcclxuICAgIHZhciBjaGVja2JveG51bSA9IDA7XHJcbiAgICB3aGlsZSAoY2hlY2tib3hudW0gPCBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKS5sZW5ndGggJiYgZ2xvYmFsRGF0YS5nZXRDaGVja2JveGVzKClbY2hlY2tib3hudW1dLnRvTG93ZXJDYXNlKCkgIT0gY2hlY2tib3huYW1lLnRvTG93ZXJDYXNlKCkpIFxyXG4gICAge1xyXG4gICAgICBjaGVja2JveG51bSsrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFib21yb3dpZCB8fCBjaGVja2JveG51bSA+PSBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKS5sZW5ndGgpIFxyXG4gICAge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgYm9tcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9tcm93aWQpO1xyXG4gICAgdmFyIGNoZWNrYm94ID0gYm9tcm93LmNoaWxkTm9kZXNbY2hlY2tib3hudW0gKyAxXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVHdXR0ZXJOb2RlKG5vZGUpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QgJiZcclxuICAgICAgbm9kZS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImd1dHRlclwiKSkge1xyXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5HdXR0ZXJzKCkge1xyXG4gIHJlbW92ZUd1dHRlck5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3RcIikpO1xyXG4gIHJlbW92ZUd1dHRlck5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNkaXZcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCb21DaGVja2JveGVzKHZhbHVlKSB7XHJcbiAgZ2xvYmFsRGF0YS5zZXRCb21DaGVja2JveGVzKHZhbHVlKTtcclxuICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImJvbUNoZWNrYm94ZXNcIiwgdmFsdWUpO1xyXG4gIHBvcHVsYXRlQm9tVGFibGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVtb3ZlQk9NRW50cmllcyh2YWx1ZSkge1xyXG4gIGdsb2JhbERhdGEuc2V0UmVtb3ZlQk9NRW50cmllcyh2YWx1ZSk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJyZW1vdmVCT01FbnRyaWVzXCIsIHZhbHVlKTtcclxuICBwb3B1bGF0ZUJvbVRhYmxlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKHZhbHVlKSB7XHJcbiAgZ2xvYmFsRGF0YS5zZXRBZGRpdGlvbmFsQXR0cmlidXRlcyh2YWx1ZSk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJhZGRpdGlvbmFsQXR0cmlidXRlc1wiLCB2YWx1ZSk7XHJcbiAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG4vLyBYWFg6IE5vbmUgb2YgdGhpcyBzZWVtcyB0byBiZSB3b3JraW5nLiBcclxuZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xyXG4gIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgIGNhc2UgXCJuXCI6XHJcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LnR5cGUgPT0gXCJ0ZXh0XCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIFhYWDogV2h5IHdhcyB0aGUgZm9sbG93aW5nIGxpbmUgaW4gdGhlIHNvZnR3YXJlXHJcbiAgICAgICAgLy9jaGVja0JvbUNoZWNrYm94KGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSwgXCJwbGFjZWRcIik7XHJcbiAgICAgICAgaGlnaGxpZ2h0TmV4dFJvdygpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgIGhpZ2hsaWdodFByZXZpb3VzUm93KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgIGhpZ2hsaWdodE5leHRSb3coKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBpZiAoZS5hbHRLZXkpIHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgY2FzZSBcImZcIjpcclxuICAgICAgICBmb2N1c0ZpbHRlckZpZWxkKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwielwiOlxyXG4gICAgICAgIGNoYW5nZUJvbUxheW91dChcIkJPTVwiKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ4XCI6XHJcbiAgICAgICAgY2hhbmdlQm9tTGF5b3V0KFwiTFJcIik7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY1wiOlxyXG4gICAgICAgIGNoYW5nZUJvbUxheW91dChcIlRCXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInZcIjpcclxuICAgICAgICBjaGFuZ2VDYW52YXNMYXlvdXQoXCJGXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImJcIjpcclxuICAgICAgICBjaGFuZ2VDYW52YXNMYXlvdXQoXCJGQlwiKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJuXCI6XHJcbiAgICAgICAgY2hhbmdlQ2FudmFzTGF5b3V0KFwiQlwiKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXkgPj0gJzEnICYmIGUua2V5IDw9ICc5Jykge1xyXG4gICAgICAvLyBUT0RPOiBUaGlzIG1pZ2h0IGJlIGFibGUgdG8gYmUgcmVtb3ZlZFxyXG4gICAgICAvL3RvZ2dsZUJvbUNoZWNrYm94KGN1cnJlbnRIaWdobGlnaHRlZFJvd0lkLCBwYXJzZUludChlLmtleSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9YWFg6IEkgd291bGQgbGlrZSB0aGlzIHRvIGJlIGluIHRoZSBodG1sIGZ1bmN0aW9ucyBqcyBmaWxlLiBCdXQgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBcclxuLy8gICAgIHBsYWNlZCBoZXJlLCBvdGhlcndpc2UgdGhlIGFwcGxpY2F0aW9uIHJlbmRlcmluZyBiZWNvbWVzIHZlcnkgdmVyeSB3ZWlyZC5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICBcclxuICAvLyBUaGlzIGZ1bmN0aW9uIG1ha2VzIHNvIHRoYXQgdGhlIHVzZXIgZGF0YSBmb3IgdGhlIHBjYiBpcyBjb252ZXJ0ZWQgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZVxyXG4gIHBjYi5PcGVuUGNiRGF0YShwY2JkYXRhKVxyXG5cclxuICBnbG9iYWxEYXRhLmluaXRTdG9yYWdlKCk7XHJcbiAgY2xlYW5HdXR0ZXJzKCk7XHJcbiAgcmVuZGVyLmluaXRSZW5kZXIoKTtcclxuICBkYmdkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRiZ1wiKTtcclxuICBib20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbWJvZHlcIik7XHJcbiAgYm9taGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9taGVhZFwiKTtcclxuICBnbG9iYWxEYXRhLnNldEJvbUxheW91dChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiYm9tbGF5b3V0XCIpKTtcclxuICBpZiAoIWdsb2JhbERhdGEuZ2V0Qm9tTGF5b3V0KCkpIHtcclxuICAgIGdsb2JhbERhdGEuc2V0Qm9tTGF5b3V0KFwiTFJcIik7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0Q2FudmFzTGF5b3V0KGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJjYW52YXNsYXlvdXRcIikpO1xyXG4gIGlmICghZ2xvYmFsRGF0YS5nZXRDYW52YXNMYXlvdXQoKSkge1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRDYW52YXNMYXlvdXQoXCJGQlwiKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlTGF5ZXJUYWJsZSgpO1xyXG5cclxuXHJcbiAgcG9wdWxhdGVNZXRhZGF0YSgpO1xyXG4gIGdsb2JhbERhdGEuc2V0Qm9tQ2hlY2tib3hlcyhnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiYm9tQ2hlY2tib3hlc1wiKSk7XHJcbiAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tQ2hlY2tib3hlcygpID09PSBudWxsKSB7XHJcbiAgICBnbG9iYWxEYXRhLnNldEJvbUNoZWNrYm94ZXMoXCJQbGFjZWRcIik7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0UmVtb3ZlQk9NRW50cmllcyhnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwicmVtb3ZlQk9NRW50cmllc1wiKSk7XHJcbiAgaWYgKGdsb2JhbERhdGEuZ2V0UmVtb3ZlQk9NRW50cmllcygpID09PSBudWxsKSB7XHJcbiAgICBnbG9iYWxEYXRhLnNldFJlbW92ZUJPTUVudHJpZXMoXCJcIik7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImFkZGl0aW9uYWxBdHRyaWJ1dGVzXCIpKTtcclxuICBpZiAoZ2xvYmFsRGF0YS5nZXRBZGRpdGlvbmFsQXR0cmlidXRlcygpID09PSBudWxsKSB7XHJcbiAgICBnbG9iYWxEYXRhLnNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKFwiXCIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbUNoZWNrYm94ZXNcIikudmFsdWUgPSBnbG9iYWxEYXRhLmdldEJvbUNoZWNrYm94ZXMoKTtcclxuICBpZiAoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcInNpbGtzY3JlZW5WaXNpYmxlXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lsa3NjcmVlbkNoZWNrYm94XCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHNpbGtzY3JlZW5WaXNpYmxlKGZhbHNlKTtcclxuICB9XHJcbiAgaWYgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJyZWRyYXdPbkRyYWdcIikgPT09IFwiZmFsc2VcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcmFnQ2hlY2tib3hcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRSZWRyYXdPbkRyYWcoZmFsc2UpO1xyXG4gIH1cclxuICBpZiAoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImRhcmttb2RlXCIpID09PSBcInRydWVcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrbW9kZUNoZWNrYm94XCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc2V0RGFya01vZGUodHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiaGlkZVBsYWNlZFBhcnRzXCIpID09PSBcInRydWVcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlUGxhY2VkUGFydHNcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgZ2xvYmFsRGF0YS5zZXRIaWRlUGxhY2VkUGFydHModHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiaGlnaGxpZ2h0cGluMVwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGxpZ2h0cGluMUNoZWNrYm94XCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRIaWdobGlnaHRQaW4xKHRydWUpO1xyXG4gICAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gICAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuYmFjayk7XHJcbiAgfVxyXG4gIC8vIElmIHRoaXMgaXMgdHJ1ZSB0aGVuIGNvbWJpbmUgcGFydHMgYW5kIGRpc3BsYXkgcXVhbnRpdHlcclxuICBpZiAoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImNvbWJpbmVWYWx1ZXNcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbWJpbmVWYWx1ZXNcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICBnbG9iYWxEYXRhLnNldENvbWJpbmVWYWx1ZXModHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiZGVidWdNb2RlXCIpID09PSBcInRydWVcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z01vZGVcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgZ2xvYmFsRGF0YS5zZXREZWJ1Z01vZGUodHJ1ZSk7XHJcbiAgfVxyXG4gIGJvYXJkUm90YXRpb24gPSBnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiYm9hcmRSb3RhdGlvblwiKTtcclxuICAvKlxyXG4gICAgQWRqdXN0ZWQgdG8gbWF0Y2ggaG93IHRoZSB1cGRhdGUgcm90YXRpb24gYW5nbGUgaXMgY2FsY3VsYXRlZC5cclxuICAqL1xyXG4gIGlmIChib2FyZFJvdGF0aW9uID09PSBudWxsKSB7XHJcbiAgICBib2FyZFJvdGF0aW9uID0gMTgwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2FyZFJvdGF0aW9uID0gcGFyc2VJbnQoYm9hcmRSb3RhdGlvbik7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRSb3RhdGlvblwiKS52YWx1ZSA9IChib2FyZFJvdGF0aW9uLTE4MCkgLyA1O1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb25EZWdyZWVcIikudGV4dENvbnRlbnQgPSAoYm9hcmRSb3RhdGlvbi0xODApO1xyXG5cclxuXHJcblxyXG5cclxuICAvLyBUcmlnZ2VycyByZW5kZXJcclxuICBjaGFuZ2VCb21MYXlvdXQoZ2xvYmFsRGF0YS5nZXRCb21MYXlvdXQoKSk7XHJcblxyXG5cclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gcmVuZGVyLnJlc2l6ZUFsbDtcclxud2luZG93Lm1hdGNoTWVkaWEoXCJwcmludFwiKS5hZGRMaXN0ZW5lcihyZW5kZXIucmVzaXplQWxsKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNldERhcmtNb2RlICAgICAgICAsIHNpbGtzY3JlZW5WaXNpYmxlICAgICAgLCBjaGFuZ2VCb21MYXlvdXQsIGNoYW5nZUNhbnZhc0xheW91dCxcclxuICBzZXRCb21DaGVja2JveGVzICAgLCBwb3B1bGF0ZUJvbVRhYmxlICAgICAgICwgc2V0RmlsdGVyICAgICAgLCBnZXRGaWx0ZXIgICAgICAgICAsXHJcbiAgc2V0UmVtb3ZlQk9NRW50cmllcywgc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXNcclxufVxyXG4iLCIvKlxyXG4gICAgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBvZiB0aGUgZGVmaW5pdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBwY2JkYXRhLmpzb24uIFxyXG4gICAgVGhpcyBmaWxlIGRlY2xhcmVzIGFsbCBvZiB0aGUgYWNjZXNzIGZ1bmN0aW9ucyBhbmQgaW50ZXJmYWNlcyBmb3IgY29udmVydGluZyBcclxuICAgIHRoZSBqc29uIGZpbGUgaW50byBhbiBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZS4gXHJcbiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUENCIFBhcnQgSW50ZXJmYWNlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gUmVhZCB0aGUgZWNhZCBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBsZXRzIHRoZSBhcHBsaWNhdGlvbiBrbm93IHdoYXQgXHJcbi8vIGVjYWQgc29mdHdhcmUgZ2VuZXJhdGVkIHRoZSBqc29uIGZpbGUuIFxyXG5mdW5jdGlvbiBHZXRDQURUeXBlKHBjYmRhdGFTdHJ1Y3R1cmUpXHJcbntcclxuICAgIGlmKHBjYmRhdGFTdHJ1Y3R1cmUuaGFzT3duUHJvcGVydHkoXCJlY2FkXCIpKXtcclxuICAgICAgICByZXR1cm4gcGNiZGF0YVN0cnVjdHVyZS5lY2FkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaGlzIHdpbGwgaG9sZCB0aGUgcGFydCBvYmplY3RzLiBUaGVyZSBpcyBvbmUgZW50cnkgcGVyIHBhcnRcclxuLy8gRm9ybWF0IG9mIGEgcGFydCBpcyBhcyBmb2xsb3dzXHJcbi8vIFtWQUxVRSxQQUNLQUdFLFJFRlJFTkVDRSBERVNJR05BVE9SLCAsTE9DQVRJT04sIEFUVFJJQlVURV0sXHJcbi8vIHdoZXJlIEFUVFJJQlVURSBpcyBhIGRpY3Qgb2YgQVRUUklCVVRFIE5BTUUgOiBBVFRSSUJVVEUgVkFMVUVcclxudmFyIEJPTSA9IFtdO1xyXG5cclxuLy8gQ29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIGEgcGFydC5cclxuZnVuY3Rpb24gUGFydCh2YWx1ZSwgcGFja2FnZSwgcmVmZXJlbmNlLCBsb2NhdGlvbiwgYXR0cmlidXRlcywgY2hlY2tib3hlcykge1xyXG4gICAgdGhpcy5xdWFudGl0eSAgID0gMTtcclxuICAgIHRoaXMudmFsdWUgICAgICA9IHZhbHVlO1xyXG4gICAgdGhpcy5wYWNrYWdlICAgID0gcGFja2FnZTtcclxuICAgIHRoaXMucmVmZXJlbmNlICA9IHJlZmVyZW5jZTtcclxuICAgIHRoaXMubG9jYXRpb24gICA9IGxvY2F0aW9uO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcclxuICAgIHRoaXMuY2hlY2tib3hlcyA9IGNoZWNrYm94ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvcHlQYXJ0KGlucHV0UGFydCl7XHJcbiAgLy8gWFhYOiBUaGlzIGlzIG5vdCBwZXJmb3JtaW5nIGEgZGVlcCBjb3B5LCBhdHRyaWJ1dGVzIGlzIGEgbWFwIGFuZCB0aGlzIGlzIGJlaW5nIGNvcGllZCBieSBcclxuICAvLyAgICAgIHJlZmVyZW5jZSB3aGljaCBpcyBub3QgcXVpdGUgd2hhdCB3ZSB3YW50IGhlcmUuIEl0IHNob3VsZCBiZSBhIGRlZXAgY29weSBzbyBvbmNlIGNhbGxlZFxyXG4gIC8vICAgICAgdGhpcyB3aWxsIHJlc3VsdCBpbiBhIGNvbXBsZXRlbHkgbmV3IG9iamVjdCB0aGF0IHdpbGwgbm90IHJlZmVyZW5jZSBvbmUgYW5vdGhlclxyXG4gIHJldHVybiBuZXcgUGFydChpbnB1dFBhcnQudmFsdWUsIGlucHV0UGFydC5wYWNrYWdlLCBpbnB1dFBhcnQucmVmZXJlbmNlLCBpbnB1dFBhcnQubG9jYXRpb24sIGlucHV0UGFydC5hdHRyaWJ1dGVzLCBpbnB1dFBhcnQuY2hlY2tib3hlcyk7XHJcbn1cclxuXHJcbi8vVE9ETzogVGhlcmUgc2hvdWxkIGJlIHN0ZXBzIGhlcmUgZm9yIHZhbGlkYXRpbmcgdGhlIGRhdGEgYW5kIHB1dHRpbmcgaXQgaW50byBhIFxyXG4vLyAgICAgIGZvcm1hdCB0aGF0IGlzIHZhbGlkIGZvciBvdXIgYXBwbGljYXRpb25cclxuZnVuY3Rpb24gQ3JlYXRlQk9NKHBjYmRhdGFTdHJ1Y3R1cmUpe1xyXG5cclxuICAgIC8vIEZvciBldmVyeSBwYXJ0IGluIHRoZSBpbnB1dCBmaWxlLCBjb252ZXJ0IGl0IHRvIG91ciBpbnRlcm5hbCBcclxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGRhdGEgc3RydWN0dXJlLlxyXG4gICAgZm9yKHZhciBwYXJ0IG9mIHBjYmRhdGFTdHJ1Y3R1cmUucGFydHMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZXh0cmFjdCB0aGUgcGFydCBkYXRhLiBUaGlzIGlzIGhlcmUgc28gSSBjYW4gaXRlcmF0ZSB0aGUgZGVzaWduIFxyXG4gICAgICAgIC8vIHdoZW4gSSBtYWtlIGNoYW5nZXMgdG8gdGhlIHVuZGVybHlpbmcganNvbiBmaWxlLlxyXG4gICAgICAgIHZhciB2YWx1ZSAgICAgPSBwYXJ0LnZhbHVlO1xyXG4gICAgICAgIHZhciBwYWNrYWdlICAgPSBcIlwiO1xyXG4gICAgICAgIHZhciByZWZlcmVuY2UgPSBwYXJ0Lm5hbWU7XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uICA9IHBhcnQubG9jYXRpb247XHJcblxyXG4gICAgICAgIC8vIEF0dHJpYnV0ZU5hbWUgYW5kIEF0dHJpYnV0ZVZhbHVlIGFyZSB0d28gc3RyaW5ncyB0aGF0IGFyZSBkZWxpbWluYXRlZCBieSAnOycuIFxyXG4gICAgICAgIC8vIFNwbGl0IHRoZSBzdHJpbmdzIGJ5ICc7JyBhbmQgdGhlbiB6aXAgdGhlbSB0b2dldGhlclxyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lcyAgPSBwYXJ0LmF0dHJpYnV0ZXMubmFtZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZXMgPSBwYXJ0LmF0dHJpYnV0ZXMudmFsdWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrYm94ZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIC8vWFhYOiBBU1NVTVRJT04gdGhhdCBhdHRyaWJ1dGVOYW1lcyBpcyB0aGUgc2FtZSBsZW5ndGggYXMgYXR0cmlidXRlVmFsdWVzXHJcbiAgICAgICAgYXR0cmlidXRlcyA9IG5ldyBNYXAoKTsgLy8gQ3JlYXRlIGEgZW1wdHkgZGljdGlvbmFyeVxyXG4gICAgICAgIGZvcih2YXIgaSBpbiBhdHRyaWJ1dGVOYW1lcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2V0KGF0dHJpYnV0ZU5hbWVzW2ldLnRvTG93ZXJDYXNlKCksYXR0cmlidXRlVmFsdWVzW2ldLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgdGhlIHBhciB0byB0aGUgZ2xvYmFsIHBhcnQgYXJyYXlcclxuICAgICAgICBCT00ucHVzaChuZXcgUGFydCh2YWx1ZSwgcGFja2FnZSwgcmVmZXJlbmNlLCBsb2NhdGlvbiwgYXR0cmlidXRlcywgY2hlY2tib3hlcykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRCT00oKXtcclxuICAgICAgcmV0dXJuIEJPTTtcclxufVxyXG5cclxuLy8gVEFrZXMgYSBCT00gdGFibGUgYW5kIGEgZmlsdGVyIGZ1bmN0aW9uLiBUaGUgZmlsdGVyIFxyXG4vLyBmdW5jdGlvbiBpcyB1c2VkIG9udGhlIHByb3ZpZGVkIHRhYmxlIHRvIHJlbW92ZSBcclxuLy8gYW55IHBhcnQgdGhhdCBzYXRpc2Z5IHRoZSBmaWx0ZXJcclxuZnVuY3Rpb24gZmlsdGVyQk9NVGFibGUoYm9tdGFibGUsIGZpbHRlckZ1bmN0aW9uKXtcclxuICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gIC8vIE1ha2VzIHN1cmUgdGhhdCB0aEUgZmlsdGVyIGZ1bmN0aW9uIGlzIGRlZmluZWQuIFxyXG4gIC8vIGlmIG5vdCBkZWZpbmVkIHRoZW4gbm90aGluZyBzaG91bGQgYmUgZmlsdGVyZWQuIFxyXG4gIGlmKGZpbHRlckZ1bmN0aW9uICE9IG51bGwpe1xyXG4gICAgZm9yKHZhciBpIGluIGJvbXRhYmxlKXtcclxuICAgICAgLy8gSWYgdGhlIGZpbHRlciByZXR1cm5zIGZhbHNlIC0+IGRvIG5vdCByZW1vdmUgcGFydCwgaXQgZG9lcyBub3QgbmVlZCB0byBiZSBmaWx0ZXJlZFxyXG4gICAgICBpZighZmlsdGVyRnVuY3Rpb24oYm9tdGFibGVbaV0pKXtcclxuICAgICAgICByZXN1bHQucHVzaChDb3B5UGFydChib210YWJsZVtpXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICByZXN1bHQgPSBib210YWJsZTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gVGFrZXMgYSBib20gdGFibGUgYW5kIGNvbWJpbmVzIGVudHJpZXMgdGhhdCBhcmUgdGhlIHNhbWVcclxuZnVuY3Rpb24gR2V0Qk9NQ29tYmluZWRWYWx1ZXMoYm9tdGFibGVUZW1wKXtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIC8vIFRPRE86IHNvcnQgYm9tdGFibGVUZW1wLiBBc3N1bXB0aW9uIGhlcmUgaXMgdGhhdCB0aGUgYm9tdGFibGVUZW1wIGlzIHByZXNvcnRlZFxyXG5cclxuICAgIGlmKGJvbXRhYmxlVGVtcC5sZW5ndGg+MCl7XHJcbiAgICAgIC8vIFhYWDogQXNzdW1pbmcgdGhhdCB0aGUgaW5wdXQganNvbiBkYXRhIGhhcyBib20gZW50cmllcyBwcmVzb3J0ZWRcclxuICAgICAgLy8gVE9ETzogU3RhcnQgYXQgaW5kZXggMSwgYW5kIGNvbXBhcmUgdGhlIGN1cnJlbnQgdG8gdGhlIGxhc3QsIHRoaXMgc2hvdWxkIHNpbXBsaWZ5IHRoZSBsb2dpY1xyXG4gICAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYnkgZGVlcCBjb3B5LiB0aGlzIGlzIGJlY2F1c2Ugb2JqZWN0cyBieSBkZWZhdWx0IGFyZSBwYXNzZWQgYnkgcmVmZXJlbmNlIGFuZCBpIGRvbnQgXHJcbiAgICAgIC8vIHdhbnQgdG8gbW9kaWZ5IHRoZW0uXHJcbiAgICAgIHJlc3VsdC5wdXNoKENvcHlQYXJ0KGJvbXRhYmxlVGVtcFswXSkpO1xyXG4gICAgICBjb3VudCA9IDA7XHJcbiAgICAgIGZvciAodmFyIG4gPSAxOyBuIDwgYm9tdGFibGVUZW1wLmxlbmd0aDtuKyspXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHRbY291bnRdLnZhbHVlID09IGJvbXRhYmxlVGVtcFtuXS52YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBGb3IgcGFydHMgdGhhdCBhcmUgbGlzdGVkIGFzIGNvbWJpbmVkLCBzdG9yZSB0aGUgcmVmZXJlbmNlcyBhcyBhbiBhcnJheS5cclxuICAgICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGUgbG9naWMgZm9yIGhpZ2hsaWdodGluZyBuZWVkcyB0byBtYXRjaCBzdHJpbmdzIGFuZCBcclxuICAgICAgICAgIC8vIElmIGFuIGFwcGVuZGVkIHN0cmluZyBpcyB1c2VkIGl0IG1pZ2h0IG5vdCB3b3JrIHJpZ2h0XHJcbiAgICAgICAgICByZWZTdHJpbmcgPSByZXN1bHRbY291bnRdLnJlZmVyZW5jZSArIFwiLFwiICsgYm9tdGFibGVUZW1wW25dLnJlZmVyZW5jZTtcclxuICAgICAgICAgIHJlc3VsdFtjb3VudF0ucXVhbnRpdHkgKz0gMTtcclxuICAgICAgICAgIHJlc3VsdFtjb3VudF0ucmVmZXJlbmNlID0gcmVmU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goQ29weVBhcnQoYm9tdGFibGVUZW1wW25dKSk7XHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUocGFydCwgYXR0cmlidXRlVG9Mb29rdXApe1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwYXJ0LmF0dHJpYnV0ZXM7XHJcbiAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICBpZihhdHRyaWJ1dGVUb0xvb2t1cCA9PSBcIm5hbWVcIilcclxuICAgIHtcclxuICAgICAgcmVzdWx0ID0gcGFydC5yZWZlcmVuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdCA9IChhdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVUb0xvb2t1cCkgPyBhdHRyaWJ1dGVzLmdldChhdHRyaWJ1dGVUb0xvb2t1cCkgOiBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vIENoZWNrIHRoYXQgdGhlIGF0dHJpYnV0ZSBleGlzdHMgYnkgbG9va2luZyB1cCBpdHMgbmFtZS4gSWYgaXQgZXhpc3RzXHJcbiAgICAvLyB0aGUgcmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSwgb3RoZXJ3aXNlIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEFkZENoZWNrYm94KGNoZWNrYm94ZXMpXHJcbntcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBDQiBNZXRhZGF0YSBJbnRlcmZhY2VzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIG1ldGFkYXRhO1xyXG4vLyBDb25zdHJ1Y3RvciBmb3IgY3JlYXRpbmcgYSBwYXJ0LlxyXG5mdW5jdGlvbiBNZXRhZGF0YSh0aXRsZSwgcmV2aXNpb24sIGNvbXBhbnksIGRhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgICAgPSB0aXRsZTtcclxuICAgIHRoaXMucmV2aXNpb24gPSByZXZpc2lvbjtcclxuICAgIHRoaXMuY29tcGFueSAgPSBjb21wYW55O1xyXG4gICAgdGhpcy5kYXRlICAgICA9IGRhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZU1ldGFkYXRhKHBjYmRhdGFTdHJ1Y3R1cmUpe1xyXG4gIG1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKHBjYmRhdGFTdHJ1Y3R1cmUubWV0YWRhdGEudGl0bGUgICwgcGNiZGF0YVN0cnVjdHVyZS5tZXRhZGF0YS5yZXZpc2lvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwY2JkYXRhU3RydWN0dXJlLm1ldGFkYXRhLmNvbXBhbnksIHBjYmRhdGFTdHJ1Y3R1cmUubWV0YWRhdGEuZGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldE1ldGFkYXRhKCl7XHJcbiAgcmV0dXJuIG1ldGFkYXRhO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUENCIExheWVycyBJbnRlcmZhY2VzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIExheWVycyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gR2V0TGF5ZXJzKClcclxue1xyXG4gICAgcmV0dXJuIExheWVyc1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUENCTGF5ZXIobmFtZSlcclxue1xyXG4gICAgdGhpcy5uYW1lICAgID0gbmFtZTtcclxuICAgIHRoaXMudmlzaWJsZV9mcm9udCA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGVfYmFjayA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNldExheWVyVmlzaWJpbGl0eShsYXllck5hbWUsIGlzRnJvbnQsIHZpc2libGUpXHJcbntcclxuICAgIHZhciBsYXllckluZGV4ID0gTGF5ZXJzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gbGF5ZXJOYW1lKVxyXG4gICAgaWYoaXNGcm9udClcclxuICAgIHtcclxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBpbiB0aGUgbGlzdCBcclxuICAgICAgICBpZiggbGF5ZXJJbmRleCAhPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gTGF5ZXIgZXhpc3RzLiBDaGVjayBpZiB2aXNpYmxlXHJcbiAgICAgICAgICBMYXllcnNbbGF5ZXJJbmRleF0udmlzaWJsZV9mcm9udCA9IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGluIHRoZSBsaXN0IFxyXG4gICAgICAgIGlmKCBsYXllckluZGV4ICE9PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBMYXllciBleGlzdHMuIENoZWNrIGlmIHZpc2libGVcclxuICAgICAgICAgIExheWVyc1tsYXllckluZGV4XS52aXNpYmxlX2JhY2sgPSB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVMYXllcnMocGNiZGF0YVN0cnVjdHVyZSlcclxue1xyXG4gICAgLy8gRXh0cmFjdCBsYXllcnMgZnJvbSB0aGUgdHJhY2Ugc2VjdGlvblxyXG4gICAgZm9yKCB2YXIgdHJhY2Ugb2YgcGNiZGF0YVN0cnVjdHVyZS5ib2FyZC50cmFjZXMpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBzZWdtZW50IG9mIHRyYWNlLnNlZ21lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzZWdtZW50IGNvbnRhaW5zIGEgbGF5ZXIgZGVmaW5pdGlvblxyXG4gICAgICAgICAgICBpZihzZWdtZW50LmxheWVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgaXRlbSBpcyBub3QgaW4gdGhlIGxpc3QgXHJcbiAgICAgICAgICAgICAgaWYoTGF5ZXJzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gc2VnbWVudC5sYXllcikgPT09IC0xKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIExheWVycy5wdXNoKG5ldyBQQ0JMYXllcihzZWdtZW50LmxheWVyKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4dHJhY3QgbGF5ZXJzIGZvcm0gdGhlIGxheWVycyBzZWN0aW9uXHJcbiAgICBmb3IodmFyIGxheWVyIG9mIHBjYmRhdGFTdHJ1Y3R1cmUuYm9hcmQubGF5ZXJzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGluIHRoZSBsaXN0IFxyXG4gICAgICAgIGlmKExheWVycy5maW5kSW5kZXgoaSA9PiBpLm5hbWUgPT09IGxheWVyLm5hbWUpID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBBZGQgdGhlIHBhciB0byB0aGUgZ2xvYmFsIHBhcnQgYXJyYXlcclxuICAgICAgICAgIExheWVycy5wdXNoKG5ldyBQQ0JMYXllcihsYXllci5uYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSXNMYXllclZpc2libGUobGF5ZXJOYW1lLCBpc0Zyb250KVxyXG57XHJcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIHZhciBsYXllckluZGV4ID0gTGF5ZXJzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gbGF5ZXJOYW1lKVxyXG5cclxuXHJcbiAgICBpZihpc0Zyb250KVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGluIHRoZSBsaXN0IFxyXG4gICAgICAgIGlmKCBsYXllckluZGV4ID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTGF5ZXIgZXhpc3RzLiBDaGVjayBpZiB2aXNpYmxlXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IExheWVyc1tsYXllckluZGV4XS52aXNpYmxlX2Zyb250O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBJZiBpdGVtIGlzIG5vdCBpbiB0aGUgbGlzdCBcclxuICAgICAgICBpZiggbGF5ZXJJbmRleCA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIExheWVyIGV4aXN0cy4gQ2hlY2sgaWYgdmlzaWJsZVxyXG4gICAgICAgICAgICByZXN1bHQgPSBMYXllcnNbbGF5ZXJJbmRleF0udmlzaWJsZV9iYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBPcGVuUGNiRGF0YShwY2JkYXRhKVxyXG57XHJcbiAgICBDcmVhdGVCT00ocGNiZGF0YSk7XHJcbiAgICBDcmVhdGVNZXRhZGF0YShwY2JkYXRhKTtcclxuICAgIENyZWF0ZUxheWVycyhwY2JkYXRhKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgT3BlblBjYkRhdGEsIEdldEJPTSwgZ2V0QXR0cmlidXRlVmFsdWUsIEdldEJPTUNvbWJpbmVkVmFsdWVzLCBmaWx0ZXJCT01UYWJsZSwgR2V0TWV0YWRhdGEsIFxyXG4gIEFkZENoZWNrYm94LCBHZXRMYXllcnMsIElzTGF5ZXJWaXNpYmxlLCBTZXRMYXllclZpc2liaWxpdHlcclxufSIsInZhciBwY2JGb250ID0ge1xyXG4gICAgXCJmb250X2RhdGFcIjoge1xyXG4gICAgICAgIFwiIFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuNzYxOTA0NzYxOTA0NzYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIjXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC45MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjE0Mjg1NzE0Mjg1NzE0MjhcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjI4NTcxNDI4NTcxNDI4NTdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wOTUyMzgwOTUyMzgwOTUyMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjg1NzE0Mjg1NzE0Mjg1N1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4xNDI4NTcxNDI4NTcxNDI4XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi1cIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDEuMjM4MDk1MjM4MDk1MjM4MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiMFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODU3MTQyODU3MTQyODU3MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODU3MTQyODU3MTQyODU3MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDI4NTcxNDI4NTcxNDI4NTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiMVwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjgwOTUyMzgwOTUyMzgwOTVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIyXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC44NTcxNDI4NTcxNDI4NTcxXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIjNcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIjRcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDI4NTcxNDI4NTcxNDI4NTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA5NTIzODA5NTIzODA5NTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzgwOTUyMzgwOTUyMzgwOTNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCI1XCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCI6XCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJBXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjMzMzMzMzMzMzMzMzMzMzNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zMzMzMzMzMzMzMzMzMzMzXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC44NTcxNDI4NTcxNDI4NTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkJcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzgwOTUyMzgwOTUyMzgwOTNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43NjE5MDQ3NjE5MDQ3NjE5XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAxLjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiQ1wiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yODU3MTQyODU3MTQyODU3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODA5NTIzODA5NTIzODA5NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAxLjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiRFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQ3NjE5MDQ3NjE5MDQ3NjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODA5NTIzODA5NTIzODA5NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjI4NTcxNDI4NTcxNDI4NTdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkVcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC45MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkZcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC44NTcxNDI4NTcxNDI4NTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkdcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODA5NTIzODA5NTIzODA5NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjI4NTcxNDI4NTcxNDI4NTdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIklcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkpcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzMzMzMzMzMzMzMzMzMzM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQ3NjE5MDQ3NjE5MDQ3NjE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC43NjE5MDQ3NjE5MDQ3NjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkxcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjgwOTUyMzgwOTUyMzgwOTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTVwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjMzMzMzMzMzMzMzMzMzMzNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC45MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4xNDI4NTcxNDI4NTcxNDI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIk5cIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlBcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDEuMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJSXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODU3MTQyODU3MTQyODU3MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41MjM4MDk1MjM4MDk1MjM3XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlNcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zMzMzMzMzMzMzMzMzMzMzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43NjE5MDQ3NjE5MDQ3NjE5XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlVcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTY0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzI2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJWXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuODU3MTQyODU3MTQyODU3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJXXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAxLjE0Mjg1NzE0Mjg1NzE0MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiWFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE0Mjg1NzE0Mjg1NzE0Mjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE0Mjg1NzE0Mjg1NzE0Mjg1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYVwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE5MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjI4NTcxNDI4NTcxNDI4NTdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzgwOTUyMzgwOTUyMzgwOTNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41MjM4MDk1MjM4MDk1MjM3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjM4MDk1MjM4MDk1MjM4MDkzXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC44NTcxNDI4NTcxNDI4NTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjkwNDc2MTkwNDc2MTkwNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaVwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC40NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJrXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjMzMzMzMzMzMzMzMzMzMzNcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid1wiOiAwLjgwOTUyMzgwOTUyMzgwOTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibFwiOiB7XHJcbiAgICAgICAgICAgIFwibFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC41MjM4MDk1MjM4MDk1MjM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5cIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvXCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC45MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDI4NTcxNDI4NTcxNDI4NTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndcIjogMC42MTkwNDc2MTkwNDc2MTkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNcIjoge1xyXG4gICAgICAgICAgICBcImxcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzMzMzMzMzMzMzMzMzMzM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQ3NjE5MDQ3NjE5MDQ3NjE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjM4MDk1MjM4MDk1MjM4MDkzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQ3NjE5MDQ3NjE5MDQ3NjE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuODA5NTIzODA5NTIzODA5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0XCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE5MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuNTcxNDI4NTcxNDI4NTcxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1XCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE5MDQ3NjE5MDQ3NjE5MDQ3XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2XCI6IHtcclxuICAgICAgICAgICAgXCJsXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3XCI6IDAuNzYxOTA0NzYxOTA0NzYxOVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qIFBDQiByZW5kZXJpbmcgY29kZSAqL1xyXG5cclxudmFyIGdsb2JhbERhdGEgPSByZXF1aXJlKCcuL2dsb2JhbC5qcycpXHJcbnZhciByZW5kZXJfcGFkcyA9IHJlcXVpcmUoJy4vcmVuZGVyX3BhZHMuanMnKVxyXG52YXIgcmVuZGVyX3NoYXBlcyA9IHJlcXVpcmUoJy4vcmVuZGVyX3NoYXBlcy5qcycpXHJcbnZhciBwY2IgICAgPSByZXF1aXJlKCcuL3BjYi5qcycpXHJcblxyXG4vL1JFTU9WRTogVXNpbmcgdG8gdGVzdCBhbHRlcm5hdGUgcGxhY2VkIGNvbG9yaW5nXHJcbnZhciBpc1BsYWNlZCA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxudmFyIHRyYWNlQ29sb3JNYXAgPSBbXHJcbiAgXCIjQzgzMjMyQjRcIixcclxuICBcIiNDQzY2MDBDOFwiLFxyXG4gIFwiI0NDOTkwMEM4XCIsXHJcbiAgXCIjMzM2NjAwQzhcIixcclxuICBcIiM2NjY2MzNDOFwiLFxyXG4gIFwiI0ZGQ0MzM0M4XCIsXHJcbiAgXCIjNjY5OTAwQzhcIixcclxuICBcIiM5OTk5NjZDOFwiLFxyXG4gIFwiIzk5Q0M5OUM4XCIsXHJcbiAgXCIjNjY5OTk5QzhcIixcclxuICBcIiMzM0NDOTlDOFwiLFxyXG4gIFwiIzY2OTk2NkM4XCIsXHJcbiAgXCIjMzM2NjY2QzhcIixcclxuICBcIiMwMDk5NjZDOFwiLFxyXG4gIFwiIzAwNjY5OUM4XCIsXHJcbiAgXCIjMzIzMkM4QjRcIixcclxuXTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlZzJyYWQoZGVnKSB7XHJcbiAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNGb250UG9pbnQobGluZXBvaW50LCB0ZXh0LCBvZmZzZXR4LCBvZmZzZXR5LCB0aWx0KSB7XHJcbiAgdmFyIHBvaW50ID0gW1xyXG4gICAgbGluZXBvaW50WzBdICogdGV4dC53aWR0aCArIG9mZnNldHgsXHJcbiAgICBsaW5lcG9pbnRbMV0gKiB0ZXh0LmhlaWdodCArIG9mZnNldHlcclxuICBdO1xyXG4gIC8vIEFkZGluZyBoYWxmIGEgbGluZSBoZWlnaHQgaGVyZSBpcyB0ZWNobmljYWxseSBhIGJ1Z1xyXG4gIC8vIGJ1dCBwY2JuZXcgY3VycmVudGx5IGRvZXMgdGhlIHNhbWUsIHRleHQgaXMgc2xpZ2h0bHkgc2hpZnRlZC5cclxuICBwb2ludFswXSAtPSAocG9pbnRbMV0gKyB0ZXh0LmhlaWdodCAqIDAuNSkgKiB0aWx0O1xyXG4gIHJldHVybiBwb2ludDtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd3RleHQoY3R4LCB0ZXh0LCBjb2xvciwgZmxpcCkge1xyXG4gIGN0eC5zYXZlKCk7XHJcbiAgY3R4LnRyYW5zbGF0ZSguLi50ZXh0LnBvcyk7XHJcbiAgdmFyIGFuZ2xlID0gLXRleHQuYW5nbGU7XHJcbiAgaWYgKHRleHQuYXR0ci5pbmNsdWRlcyhcIm1pcnJvcmVkXCIpKSB7XHJcbiAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgYW5nbGUgPSAtYW5nbGU7XHJcbiAgfVxyXG4gIHZhciB0aWx0ID0gMDtcclxuICBpZiAodGV4dC5hdHRyLmluY2x1ZGVzKFwiaXRhbGljXCIpKSB7XHJcbiAgICB0aWx0ID0gMC4xMjU7XHJcbiAgfVxyXG4gIHZhciBpbnRlcmxpbmUgPSAodGV4dC5oZWlnaHQgKiAxLjUgKyB0ZXh0LnRoaWNrbmVzcykgLyAyO1xyXG4gIHZhciB0eHQgPSB0ZXh0LnRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgY3R4LnJvdGF0ZShkZWcycmFkKGFuZ2xlKSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSB0ZXh0LnRoaWNrbmVzcztcclxuICBmb3IgKHZhciBpIGluIHR4dCkge1xyXG4gICAgdmFyIG9mZnNldHkgPSAoLSh0eHQubGVuZ3RoIC0gMSkgKyBpICogMikgKiBpbnRlcmxpbmUgKyB0ZXh0LmhlaWdodCAvIDI7XHJcbiAgICB2YXIgbGluZVdpZHRoID0gMDtcclxuICAgIGZvciAodmFyIGMgb2YgdHh0W2ldKSB7XHJcbiAgICAgIGxpbmVXaWR0aCArPSBwY2JGb250LmZvbnRfZGF0YVtjXS53ICogdGV4dC53aWR0aDtcclxuICAgIH1cclxuICAgIHZhciBvZmZzZXR4ID0gMDtcclxuICAgIHN3aXRjaCAodGV4dC5ob3Jpel9qdXN0aWZ5KSB7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgLy8gSnVzdGlmeSBsZWZ0LCBkbyBub3RoaW5nXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICAvLyBKdXN0aWZ5IGNlbnRlclxyXG4gICAgICAgIG9mZnNldHggLT0gbGluZVdpZHRoIC8gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIC8vIEp1c3RpZnkgcmlnaHRcclxuICAgICAgICBvZmZzZXR4IC09IGxpbmVXaWR0aDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGMgb2YgdHh0W2ldKSB7XHJcbiAgICAgIGZvciAodmFyIGxpbmUgb2YgcGNiRm9udC5mb250X2RhdGFbY10ubCkge1xyXG4gICAgICAgIC8vIERyYXdpbmcgZWFjaCBzZWdtZW50IHNlcGFyYXRlbHkgaW5zdGVhZCBvZlxyXG4gICAgICAgIC8vIHBvbHlsaW5lIGJlY2F1c2Ugcm91bmQgbGluZSBjYXBzIGRvbid0IHdvcmsgaW4gam9pbnRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY3R4Lm1vdmVUbyguLi5jYWxjRm9udFBvaW50KGxpbmVbaV0sIHRleHQsIG9mZnNldHgsIG9mZnNldHksIHRpbHQpKTtcclxuICAgICAgICAgIGN0eC5saW5lVG8oLi4uY2FsY0ZvbnRQb2ludChsaW5lW2kgKyAxXSwgdGV4dCwgb2Zmc2V0eCwgb2Zmc2V0eSwgdGlsdCkpO1xyXG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvZmZzZXR4ICs9IHBjYkZvbnQuZm9udF9kYXRhW2NdLncgKiB0ZXh0LndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3ZWRnZShjdHgsIHNjYWxlZmFjdG9yLCBlZGdlLCBjb2xvcikge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxIC8gc2NhbGVmYWN0b3IsIGVkZ2Uud2lkdGgpO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG5cclxuICBpZiAoZWRnZS5wYXRodHlwZSA9PSBcImxpbmVcIikgXHJcbiAge1xyXG4gICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS90YWdzL2NhbnZhc19tb3ZldG8uYXNwXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGVkZ2UueDAsIGVkZ2UueTApO1xyXG4gICAgY3R4LmxpbmVUbyhlZGdlLngxLCBlZGdlLnkxKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbiAgaWYgKGVkZ2UucGF0aHR5cGUgPT0gXCJhcmNcIikgXHJcbiAge1xyXG4gICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS90YWdzL2NhbnZhc19hcmMuYXNwXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKCBlZGdlLmN4MCwgZWRnZS5jeTAsIGVkZ2UucmFkaXVzLCBkZWcycmFkKGVkZ2UuYW5nbGUwKSwgZGVnMnJhZChlZGdlLmFuZ2xlMSkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1BvbHlnb25zKGN0eCwgY29sb3IsIHBvbHlnb24sIGNvbG9yKSBcclxue1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdmFyIGZpcnN0ID0gMTtcclxuICAgIGZvciAodmFyIHZlcnRleCBvZiBwb2x5Z29uKSBcclxuICAgIHtcclxuICAgICAgICBpZihmaXJzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHZlcnRleC5wYXRodHlwZSA9PSBcImxpbmVcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh2ZXJ0ZXgueDAsIHZlcnRleC55MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZlcnRleC54MSwgdmVydGV4LnkxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZih2ZXJ0ZXgucGF0aHR5cGUgPT0gXCJsaW5lXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odmVydGV4LngxLCB2ZXJ0ZXgueTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb2x5IEFyY2hcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICAvL2N0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdQb2x5Z29uU2hhcGUoY3R4LCBzaGFwZSwgY29sb3IpIHtcclxuICBjdHguc2F2ZSgpO1xyXG4gIGN0eC50cmFuc2xhdGUoLi4uc2hhcGUucG9zKTtcclxuICBjdHgucm90YXRlKGRlZzJyYWQoLXNoYXBlLmFuZ2xlKSk7XHJcbiAgZHJhd1BvbHlnb25zKGN0eCwgY29sb3IsIHNoYXBlLnBvbHlnb25zLCBjdHguZmlsbC5iaW5kKGN0eCkpO1xyXG4gIGN0eC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdEcmF3aW5nKGN0eCwgbGF5ZXIsIHNjYWxlZmFjdG9yLCBkcmF3aW5nLCBjb2xvcikge1xyXG4gIGlmIChbXCJzZWdtZW50XCIsIFwiYXJjXCIsIFwiY2lyY2xlXCJdLmluY2x1ZGVzKGRyYXdpbmcudHlwZSkpIHtcclxuICAgIGRyYXdlZGdlKGN0eCwgc2NhbGVmYWN0b3IsIGRyYXdpbmcsIGNvbG9yKTtcclxuICB9IGVsc2UgaWYgKGRyYXdpbmcudHlwZSA9PSBcInBvbHlnb25cIikge1xyXG4gICAgZHJhd1BvbHlnb25TaGFwZShjdHgsIGRyYXdpbmcsIGNvbG9yKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZHJhd3RleHQoY3R4LCBkcmF3aW5nLCBjb2xvciwgbGF5ZXIgPT0gXCJCXCIpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdQYWQoY3R4LCBwYWQsIGNvbG9yLCBvdXRsaW5lKSBcclxue1xyXG4gICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICBpZiAocGFkLnNoYXBlID09IFwicmVjdFwiKSBcclxuICAgIHtcclxuICAgICAgICByZW5kZXJfcGFkcy5SZWN0YW5nbGUoY3R4LCBwYWQsIGNvbG9yLCBvdXRsaW5lKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmIChwYWQuc2hhcGUgPT0gXCJvYmxvbmdcIikgXHJcbiAgICB7XHJcbiAgICAgICAgcmVuZGVyX3BhZHMuT2Jsb25nKGN0eCwgY29sb3IsIHBhZCwgb3V0bGluZSk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAocGFkLnNoYXBlID09IFwicm91bmRcIikgXHJcbiAgICB7XHJcbiAgICAgICAgIHJlbmRlcl9wYWRzLlJvdW5kKGN0eCwgY29sb3IsIHBhZCwgb3V0bGluZSk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAocGFkLnNoYXBlID09IFwib2N0YWdvblwiKSBcclxuICAgIHtcclxuICAgICAgcmVuZGVyX3BhZHMuT2N0YWdvbihjdHgsIGNvbG9yLCBwYWQsIG91dGxpbmUpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKHBhZC5zaGFwZSA9PSBcImN1c3RvbVwiKSBcclxuICAgIHtcclxuICAgICAgICAvL2RyYXdQb2x5Z29ucyhjdHgsIGNvbG9yLCBwYWQucG9seWdvbnMsIGN0eG1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd01vZHVsZShjdHgsIGxheWVyLCBzY2FsZWZhY3RvciwgcGFydCwgcGFkY29sb3IsIG91dGxpbmVjb2xvciwgaGlnaGxpZ2h0KSBcclxue1xyXG4gICAgaWYgKGhpZ2hsaWdodCB8fCBnbG9iYWxEYXRhLmdldERlYnVnTW9kZSgpKSBcclxuICAgIHtcclxuICAgICAgICAvLyBkcmF3IGJvdW5kaW5nIGJveFxyXG4gICAgICAgIGlmIChwYXJ0LmxvY2F0aW9uID09IGxheWVyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMjtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhZGNvbG9yO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGFydC5wYWNrYWdlLmJvdW5kaW5nX2JveC54MCxwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LnkwKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LngxLHBhcnQucGFja2FnZS5ib3VuZGluZ19ib3gueTApO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHBhcnQucGFja2FnZS5ib3VuZGluZ19ib3gueDEscGFydC5wYWNrYWdlLmJvdW5kaW5nX2JveC55MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocGFydC5wYWNrYWdlLmJvdW5kaW5nX2JveC54MCxwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LnkxKTtcclxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBwYWRjb2xvcjtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LngwLHBhcnQucGFja2FnZS5ib3VuZGluZ19ib3gueTApO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHBhcnQucGFja2FnZS5ib3VuZGluZ19ib3gueDEscGFydC5wYWNrYWdlLmJvdW5kaW5nX2JveC55MCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocGFydC5wYWNrYWdlLmJvdW5kaW5nX2JveC54MSxwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LnkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94LngwLHBhcnQucGFja2FnZS5ib3VuZGluZ19ib3gueTEpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICAvLyBkcmF3IGRyYXdpbmdzXHJcbiAgICBmb3IgKHZhciBkcmF3aW5nIG9mIG1vZHVsZS5kcmF3aW5ncykgXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGRyYXdpbmcubGF5ZXIgPT0gbGF5ZXIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRyYXdEcmF3aW5nKGN0eCwgbGF5ZXIsIHNjYWxlZmFjdG9yLCBkcmF3aW5nLmRyYXdpbmcsIHBhZGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiovXHJcbiAgICAvLyBkcmF3IHBhZHNcclxuICAgIGZvciAodmFyIHBhZCBvZiBwYXJ0LnBhY2thZ2UucGFkcykgXHJcbiAgICB7XHJcbiAgICAgICAgLyogXHJcbiAgICAgICAgICAgIENoZWNrIHRoYXQgcGFydCBvbiBsYXllciBzaG91bGQgYmUgZHJhd24uIFdpbGwgZHJhdyB3aGVuIHJlcXVlc3RlZCBsYXllciBcclxuICAgICAgICAgICAgbWF0Y2hlcyB0aGUgcGFydHMgbGF5ZXIuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICBJZiB0aGUgcGFydCBpcyB0aHJvdWdoIGhvbGUgaXQgbmVlZHMgdG8gYmUgZHJhd24gb24gZWFjaCBsYXllclxyXG4gICAgICAgICAgb3RoZXJ3aXNlIHRoZSBwYXJ0IGlzIGFuIHNtZCBhbmQgc2hvdWxkIG9ubHkgYmUgZHJhd24gb24gYSB0aGUgbGF5ZXIgaXQgYmVsb25ncyB0by5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICggICAgKHBhZC5wYWRfdHlwZSA9PSBcInRodFwiKVxyXG4gICAgICAgICAgICAgfHwgKChwYWQucGFkX3R5cGUgPT0gXCJzbWRcIikgJiYgKHBhcnQubG9jYXRpb24gPT0gbGF5ZXIpKVxyXG4gICAgICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgocGFkLnBpbjEgPT0gXCJ5ZXNcIikgJiYgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRQaW4xKCkpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkcmF3UGFkKGN0eCwgcGFkLCBvdXRsaW5lY29sb3IsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHJhd1BhZChjdHgsIHBhZCwgcGFkY29sb3IsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0VkZ2VzKGNhbnZhcywgc2NhbGVmYWN0b3IpIFxyXG57XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHZhciBlZGdlY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHRvcG1vc3RkaXYpLmdldFByb3BlcnR5VmFsdWUoJy0tcGNiLWVkZ2UtY29sb3InKTtcclxuICAgIGZvciAodmFyIGVkZ2Ugb2YgcGNiZGF0YS5ib2FyZC5wY2Jfc2hhcGUuZWRnZXMpIFxyXG4gICAge1xyXG4gICAgICAgIGRyYXdlZGdlKGN0eCwgc2NhbGVmYWN0b3IsIGVkZ2UsIGVkZ2Vjb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdNb2R1bGVzKGNhbnZhcywgbGF5ZXIsIHNjYWxlZmFjdG9yLCBoaWdobGlnaHRlZFJlZnMpIHtcclxuXHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzIC8gc2NhbGVmYWN0b3I7XHJcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRvcG1vc3RkaXYpO1xyXG5cclxuICAgIHZhciBwYWRjb2xvciA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tcGFkLWNvbG9yJyk7XHJcbiAgICB2YXIgb3V0bGluZWNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1waW4xLW91dGxpbmUtY29sb3InKTtcclxuICAgIGlmKGdsb2JhbERhdGEuZ2V0RGVidWdNb2RlKCkpXHJcbiAgICB7XHJcbiAgICAgICAgcGFkY29sb3IgICAgID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYWQtY29sb3ItaGlnaGxpZ2h0LWRlYnVnJyk7XHJcbiAgICAgICAgb3V0bGluZWNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1waW4xLW91dGxpbmUtY29sb3ItaGlnaGxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoaGlnaGxpZ2h0ZWRSZWZzLmxlbmd0aCA+IDApIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGlzUGxhY2VkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkY29sb3IgICAgID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYWQtY29sb3ItaGlnaGxpZ2h0LXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIG91dGxpbmVjb2xvciA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tcGluMS1vdXRsaW5lLWNvbG9yLWhpZ2hsaWdodC1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWRjb2xvciAgICAgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhZC1jb2xvci1oaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgb3V0bGluZWNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1waW4xLW91dGxpbmUtY29sb3ItaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIHBhcnQgb2YgcGNiZGF0YS5wYXJ0cykgXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBoaWdobGlnaHQgPSBoaWdobGlnaHRlZFJlZnMuaW5jbHVkZXMocGFydC5uYW1lKTtcclxuICAgICAgICBpZiAoaGlnaGxpZ2h0ZWRSZWZzLmxlbmd0aCA9PSAwIHx8IGhpZ2hsaWdodCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkcmF3TW9kdWxlKGN0eCwgbGF5ZXIsIHNjYWxlZmFjdG9yLCBwYXJ0LCBwYWRjb2xvciwgb3V0bGluZWNvbG9yLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdUcmFjZXMoY2FudmFzLCBsYXllciwgc2NhbGVmYWN0b3IpXHJcbntcclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIGlzRnJvbnQgPSAobGF5ZXIgPT09IFwiRlwiKTtcclxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgdHJhY2VzIGluIHRoZSBkZXNpZ25cclxuICAgIGZvciAodmFyIHRyYWNlIG9mIHBjYmRhdGEuYm9hcmQudHJhY2VzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgc2VnbWVudHMgaW4gYSB0cmFjZSBcclxuICAgICAgICBmb3IgKHZhciBzZWdtZW50IG9mIHRyYWNlLnNlZ21lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gbG9va3VwIHRoZSBjb2xvciBjb2RlIHRoYXQgaXMgYXNzaWduZWQgdG8gdGhlIHRyYWNlIGxheWVyLlxyXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGlzIGZvciB1c2UgbGF0ZXIuIFxyXG4gICAgICAgICAgICBjb2xvciA9IHRyYWNlQ29sb3JNYXBbc2VnbWVudC5sYXllci0xXVxyXG4gICAgICAgICAgICBpZiAoW1wibGluZVwiLCBcImFyY1wiXS5pbmNsdWRlcyhzZWdtZW50LnBhdGh0eXBlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYocGNiLklzTGF5ZXJWaXNpYmxlKHNlZ21lbnQubGF5ZXIsIGlzRnJvbnQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdlZGdlKGN0eCwgc2NhbGVmYWN0b3IsIHNlZ21lbnQsY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlZ21lbnQucGF0aHR5cGUgPT0gXCJwb2x5Z29uXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLiBUaGUgcG9seWdvbnMgZG9uJ3QgcmVuZGVyIGNvcnJlY3RseSB5ZXQuXHJcbiAgICAgICAgICAgICAgICAvL2RyYXdQb2x5Z29ucyhjdHgsIHNjYWxlZmFjdG9yLCBzZWdtZW50LnNlZ21lbnRzLGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKCBzZWdtZW50LnBhdGh0eXBlID09IFwidmlhX3JvdW5kXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgb3V0ZXIgZGlhbWV0ZXJcclxuICAgICAgICAgICAgICAgIHJlbmRlcl9zaGFwZXMuUm91bmQoY3R4LCBcIiMwMDAwMDBcIiwgc2VnbWVudC54LCBzZWdtZW50LnksIDAsIHNlZ21lbnQuZGlhbWV0ZXIsIDApO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVuZGVycyB0aGUgZHJpbGwgaG9sZSAoaW5uZXIgY2lyY2xlKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyX3NoYXBlcy5Sb3VuZChjdHgsIFwiI0NDQ0NDQ1wiLCBzZWdtZW50LngsIHNlZ21lbnQueSwgMCwgc2VnbWVudC5kcmlsbCwgMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIHNlZ21lbnQucGF0aHR5cGUgPT0gXCJ2aWFfb2N0YWdvblwiKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgIHJlbmRlcl9zaGFwZXMuT2N0YWdvbihjdHgsIFwiIzAwMDAwMFwiLCBzZWdtZW50LngsIHNlZ21lbnQueSwgMCwgc2VnbWVudC5kaWFtZXRlciwgMCk7XHJcbiAgICAgICAgICAgICAgcmVuZGVyX3NoYXBlcy5Sb3VuZChjdHgsIFwiI0NDQ0NDQ1wiLCBzZWdtZW50LngsIHNlZ21lbnQueSwgMCwgc2VnbWVudC5kcmlsbCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiggc2VnbWVudC5wYXRodHlwZSA9PSBcInZpYV9zcXVhcmVcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlbmRlcl9zaGFwZXMuU3F1YXJlKGN0eCwgXCIjMDAwMDAwXCIsIHNlZ21lbnQueCwgc2VnbWVudC55LCAwLCBzZWdtZW50LmRpYW1ldGVyLCAwKTtcclxuICAgICAgICAgICAgICByZW5kZXJfc2hhcGVzLlJvdW5kKGN0eCwgXCIjQ0NDQ0NDXCIsIHNlZ21lbnQueCwgc2VnbWVudC55LCAwLCBzZWdtZW50LmRyaWxsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL2RyYXd0ZXh0KGN0eCwgc2VnbWVudCwgXCIjNGFhXCIsIGxheWVyID09IFwiQlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkcmF3U2lsa3NjcmVlbihjYW52YXMsIGZyb250T3JCYWNrLCBzY2FsZWZhY3Rvcilcclxue1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB2YXIgaXNGcm9udCA9IChmcm9udE9yQmFjayA9PT0gXCJGXCIpO1xyXG5cclxuICAgIGZvciAodmFyIGxheWVyIG9mIHBjYmRhdGEuYm9hcmQubGF5ZXJzKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHBjYi5Jc0xheWVyVmlzaWJsZShsYXllci5uYW1lLCBpc0Zyb250KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHBhdGggb2YgbGF5ZXIucGF0aHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChbXCJsaW5lXCIsIFwiYXJjXCIsIFwiY2lyY2xlXCJdLmluY2x1ZGVzKHBhdGgucGF0aHR5cGUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdlZGdlKGN0eCwgc2NhbGVmYWN0b3IsIHBhdGgsIFwiI2FhNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhdGgucGF0aHR5cGUgPT0gXCJwb2x5Z29uXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kcmF3UG9seWdvblNoYXBlKGN0eCwgZCwgXCIjNGFhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL2RyYXd0ZXh0KGN0eCwgZCwgXCIjNGFhXCIsIGxheWVyID09IFwiQlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDYW52YXMoY2FudmFzKSB7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LnNhdmUoKTtcclxuICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SGlnaGxpZ2h0c09uTGF5ZXIoY2FudmFzZGljdCkge1xyXG4gIGNsZWFyQ2FudmFzKGNhbnZhc2RpY3QuaGlnaGxpZ2h0KTtcclxuICBkcmF3TW9kdWxlcyhjYW52YXNkaWN0LmhpZ2hsaWdodCwgY2FudmFzZGljdC5sYXllcixcclxuICAgIGNhbnZhc2RpY3QudHJhbnNmb3JtLnMsIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0ZWRSZWZzKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SGlnaGxpZ2h0cyhwYXNzZWQpIFxyXG57XHJcbiAgaXNQbGFjZWQ9cGFzc2VkO1xyXG4gIGRyYXdIaWdobGlnaHRzT25MYXllcihhbGxjYW52YXMuZnJvbnQpO1xyXG4gIGRyYXdIaWdobGlnaHRzT25MYXllcihhbGxjYW52YXMuYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKGNhbnZhc2RpY3QpIHtcclxuICBjbGVhckNhbnZhcyhjYW52YXNkaWN0LmJnKTtcclxuICBjbGVhckNhbnZhcyhjYW52YXNkaWN0LnNpbGspO1xyXG4gIGRyYXdFZGdlcyhjYW52YXNkaWN0LmJnLCBjYW52YXNkaWN0LnRyYW5zZm9ybS5zKTtcclxuICBkcmF3TW9kdWxlcyhjYW52YXNkaWN0LmJnLCBjYW52YXNkaWN0LmxheWVyLCBjYW52YXNkaWN0LnRyYW5zZm9ybS5zLCBbXSk7XHJcbiAgZHJhd1NpbGtzY3JlZW4oY2FudmFzZGljdC5zaWxrLCBjYW52YXNkaWN0LmxheWVyLCBjYW52YXNkaWN0LnRyYW5zZm9ybS5zKTtcclxuICBkcmF3VHJhY2VzKGNhbnZhc2RpY3Quc2lsaywgY2FudmFzZGljdC5sYXllciwgY2FudmFzZGljdC50cmFuc2Zvcm0ucylcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUNhbnZhcyhjYW52YXMsIGZsaXAsIHRyYW5zZm9ybSkge1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgdmFyIGZvbnRzaXplID0gMS41NTtcclxuICBjdHguc2NhbGUodHJhbnNmb3JtLnpvb20sIHRyYW5zZm9ybS56b29tKTtcclxuICBjdHgudHJhbnNsYXRlKHRyYW5zZm9ybS5wYW54LCB0cmFuc2Zvcm0ucGFueSk7XHJcbiAgaWYgKGZsaXApIHtcclxuICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgfVxyXG4gIGN0eC50cmFuc2xhdGUodHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcclxuICBjdHgucm90YXRlKGRlZzJyYWQoYm9hcmRSb3RhdGlvbikpO1xyXG4gIGN0eC5zY2FsZSh0cmFuc2Zvcm0ucywgdHJhbnNmb3JtLnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlTGF5ZXIoY2FudmFzZGljdCkge1xyXG4gIHZhciBmbGlwID0gKGNhbnZhc2RpY3QubGF5ZXIgIT0gXCJCXCIpO1xyXG4gIGZvciAodmFyIGMgb2YgW1wiYmdcIiwgXCJzaWxrXCIsIFwiaGlnaGxpZ2h0XCJdKSB7XHJcbiAgICBwcmVwYXJlQ2FudmFzKGNhbnZhc2RpY3RbY10sIGZsaXAsIGNhbnZhc2RpY3QudHJhbnNmb3JtKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZVZlY3Rvcih2LCBhbmdsZSkge1xyXG4gIGFuZ2xlID0gZGVnMnJhZChhbmdsZSk7XHJcbiAgcmV0dXJuIFtcclxuICAgIHZbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2WzFdICogTWF0aC5zaW4oYW5nbGUpLFxyXG4gICAgdlswXSAqIE1hdGguc2luKGFuZ2xlKSArIHZbMV0gKiBNYXRoLmNvcyhhbmdsZSlcclxuICBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJvdGF0aW9uKGJib3gpIHtcclxuICB2YXIgY29ybmVycyA9IFtcclxuICAgIFtiYm94Lm1pbngsIGJib3gubWlueV0sXHJcbiAgICBbYmJveC5taW54LCBiYm94Lm1heHldLFxyXG4gICAgW2Jib3gubWF4eCwgYmJveC5taW55XSxcclxuICAgIFtiYm94Lm1heHgsIGJib3gubWF4eV0sXHJcbiAgXTtcclxuICBjb3JuZXJzID0gY29ybmVycy5tYXAoKHYpID0+IHJvdGF0ZVZlY3Rvcih2LCBib2FyZFJvdGF0aW9uKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1pbng6IGNvcm5lcnMucmVkdWNlKChhLCB2KSA9PiBNYXRoLm1pbihhLCB2WzBdKSwgSW5maW5pdHkpLFxyXG4gICAgbWlueTogY29ybmVycy5yZWR1Y2UoKGEsIHYpID0+IE1hdGgubWluKGEsIHZbMV0pLCBJbmZpbml0eSksXHJcbiAgICBtYXh4OiBjb3JuZXJzLnJlZHVjZSgoYSwgdikgPT4gTWF0aC5tYXgoYSwgdlswXSksIC1JbmZpbml0eSksXHJcbiAgICBtYXh5OiBjb3JuZXJzLnJlZHVjZSgoYSwgdikgPT4gTWF0aC5tYXgoYSwgdlsxXSksIC1JbmZpbml0eSksXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNhbGNMYXllclNjYWxlKGNhbnZhc2RpY3QpIHtcclxuICB2YXIgY2FudmFzZGl2aWQgPSB7XHJcbiAgICBcIkZcIjogXCJmcm9udGNhbnZhc1wiLFxyXG4gICAgXCJCXCI6IFwiYmFja2NhbnZhc1wiXHJcbiAgfSBbY2FudmFzZGljdC5sYXllcl07XHJcbiAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzZGl2aWQpLmNsaWVudFdpZHRoICogMjtcclxuICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzZGl2aWQpLmNsaWVudEhlaWdodCAqIDI7XHJcbiAgdmFyIGJib3ggPSBhcHBseVJvdGF0aW9uKHBjYmRhdGEuYm9hcmQucGNiX3NoYXBlLmJvdW5kaW5nX2JveCk7XHJcbiAgdmFyIHNjYWxlZmFjdG9yID0gMC45OCAqIE1hdGgubWluKFxyXG4gICAgd2lkdGggLyAoYmJveC5tYXh4IC0gYmJveC5taW54KSxcclxuICAgIGhlaWdodCAvIChiYm94Lm1heHkgLSBiYm94Lm1pbnkpXHJcbiAgKTtcclxuICBpZiAoc2NhbGVmYWN0b3IgPCAwLjEpIHtcclxuICAgIHNjYWxlZmFjdG9yID0gMTtcclxuICB9XHJcbiAgY2FudmFzZGljdC50cmFuc2Zvcm0ucyA9IHNjYWxlZmFjdG9yO1xyXG4gIHZhciBmbGlwID0gKGNhbnZhc2RpY3QubGF5ZXIgIT0gXCJCXCIpO1xyXG4gIGlmIChmbGlwKSB7XHJcbiAgICBjYW52YXNkaWN0LnRyYW5zZm9ybS54ID0gLSgoYmJveC5tYXh4ICsgYmJveC5taW54KSAqIHNjYWxlZmFjdG9yICsgd2lkdGgpICogMC41O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYW52YXNkaWN0LnRyYW5zZm9ybS54ID0gLSgoYmJveC5tYXh4ICsgYmJveC5taW54KSAqIHNjYWxlZmFjdG9yIC0gd2lkdGgpICogMC41O1xyXG4gIH1cclxuICBjYW52YXNkaWN0LnRyYW5zZm9ybS55ID0gLSgoYmJveC5tYXh5ICsgYmJveC5taW55KSAqIHNjYWxlZmFjdG9yIC0gaGVpZ2h0KSAqIDAuNTtcclxuICBmb3IgKHZhciBjIG9mIFtcImJnXCIsIFwic2lsa1wiLCBcImhpZ2hsaWdodFwiXSkge1xyXG4gICAgY2FudmFzID0gY2FudmFzZGljdFtjXTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICh3aWR0aCAvIDIpICsgXCJweFwiO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQgLyAyKSArIFwicHhcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHJhd0NhbnZhcyhsYXllcmRpY3QpIHtcclxuICBwcmVwYXJlTGF5ZXIobGF5ZXJkaWN0KTtcclxuICBkcmF3QmFja2dyb3VuZChsYXllcmRpY3QpO1xyXG4gIGRyYXdIaWdobGlnaHRzT25MYXllcihsYXllcmRpY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNpemVDYW52YXMobGF5ZXJkaWN0KSB7XHJcbiAgcmVjYWxjTGF5ZXJTY2FsZShsYXllcmRpY3QpO1xyXG4gIHJlZHJhd0NhbnZhcyhsYXllcmRpY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNpemVBbGwoKSB7XHJcbiAgcmVzaXplQ2FudmFzKGFsbGNhbnZhcy5mcm9udCk7XHJcbiAgcmVzaXplQ2FudmFzKGFsbGNhbnZhcy5iYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmJveFNjYW4obGF5ZXIsIHgsIHksIHRyYW5zZm9ybSkgXHJcbntcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIHBhcnQgb2YgcGNiZGF0YS5wYXJ0cykgXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHBhcnQubG9jYXRpb24gPT0gbGF5ZXIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGIgPSBwYXJ0LnBhY2thZ2UuYm91bmRpbmdfYm94O1xyXG4gICAgICAgICAgICBpZiAoICAgICh4ID4gYi54MCApXHJcbiAgICAgICAgICAgICAgICAgJiYgKHggPCBiLngxIClcclxuICAgICAgICAgICAgICAgICAmJiAoeSA+IGIueTAgKVxyXG4gICAgICAgICAgICAgICAgICYmICh5IDwgYi55MSApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJ0Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGUsIGxheWVyZGljdCkge1xyXG4gIGlmIChlLndoaWNoICE9IDEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZXN0YXJ0eCA9IGUub2Zmc2V0WDtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlc3RhcnR5ID0gZS5vZmZzZXRZO1xyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3dueCA9IGUub2Zmc2V0WDtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93bnkgPSBlLm9mZnNldFk7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZWRvd24gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGxUb1Jvdyhyb3dpZCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvd2lkKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgaW5saW5lOiBcIm5lYXJlc3RcIlxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzQ2xpY2tlZChyZWZlcmVuY2VzKSB7XHJcbiAgdmFyIGxhc3RDbGlja2VkSW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoZ2xvYmFsRGF0YS5nZXRMYXN0Q2xpY2tlZFJlZigpKTtcclxuICB2YXIgcmVmID0gcmVmZXJlbmNlc1sobGFzdENsaWNrZWRJbmRleCArIDEpICUgcmVmZXJlbmNlcy5sZW5ndGhdO1xyXG4gIGZvciAodmFyIGhhbmRsZXIgb2YgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpKSB7XHJcbiAgICBpZiAoaGFuZGxlci5yZWZzLmluZGV4T2YocmVmKSA+PSAwKSB7XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0TGFzdENsaWNrZWRSZWYocmVmKTtcclxuICAgICAgaGFuZGxlci5oYW5kbGVyKCk7XHJcbiAgICAgIHNtb290aFNjcm9sbFRvUm93KGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlQ2xpY2soZSwgbGF5ZXJkaWN0KSB7XHJcbiAgdmFyIHggPSBlLm9mZnNldFg7XHJcbiAgdmFyIHkgPSBlLm9mZnNldFk7XHJcbiAgdmFyIHQgPSBsYXllcmRpY3QudHJhbnNmb3JtO1xyXG4gIGlmIChsYXllcmRpY3QubGF5ZXIgIT0gXCJCXCIpIHtcclxuICAgIHggPSAoMiAqIHggLyB0Lnpvb20gLSB0LnBhbnggKyB0LngpIC8gLXQucztcclxuICB9IGVsc2Uge1xyXG4gICAgeCA9ICgyICogeCAvIHQuem9vbSAtIHQucGFueCAtIHQueCkgLyB0LnM7XHJcbiAgfVxyXG4gIHkgPSAoMiAqIHkgLyB0Lnpvb20gLSB0LnkgLSB0LnBhbnkpIC8gdC5zO1xyXG4gIHZhciB2ID0gcm90YXRlVmVjdG9yKFt4LCB5XSwgLWJvYXJkUm90YXRpb24pO1xyXG4gIHZhciByZWZsaXN0ID0gYmJveFNjYW4obGF5ZXJkaWN0LmxheWVyLCB2WzBdLCB2WzFdLCB0KTtcclxuICBpZiAocmVmbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICBtb2R1bGVzQ2xpY2tlZChyZWZsaXN0KTtcclxuICAgIGRyYXdIaWdobGlnaHRzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUsIGxheWVyZGljdCkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGlmIChlLndoaWNoID09IDEgJiZcclxuICAgIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3duICYmXHJcbiAgICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93bnggPT0gZS5vZmZzZXRYICYmXHJcbiAgICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93bnkgPT0gZS5vZmZzZXRZKSB7XHJcbiAgICAvLyBUaGlzIGlzIGp1c3QgYSBjbGlja1xyXG4gICAgaGFuZGxlTW91c2VDbGljayhlLCBsYXllcmRpY3QpO1xyXG4gICAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZWRvd24gPSBmYWxzZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGUud2hpY2ggPT0gMykge1xyXG4gICAgLy8gUmVzZXQgcGFuIGFuZCB6b29tIG9uIHJpZ2h0IGNsaWNrLlxyXG4gICAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5wYW54ID0gMDtcclxuICAgIGxheWVyZGljdC50cmFuc2Zvcm0ucGFueSA9IDA7XHJcbiAgICBsYXllcmRpY3QudHJhbnNmb3JtLnpvb20gPSAxO1xyXG4gICAgcmVkcmF3Q2FudmFzKGxheWVyZGljdCk7XHJcbiAgfSBlbHNlIGlmICghZ2xvYmFsRGF0YS5nZXRSZWRyYXdPbkRyYWcoKSkge1xyXG4gICAgcmVkcmF3Q2FudmFzKGxheWVyZGljdCk7XHJcbiAgfVxyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3duID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlLCBsYXllcmRpY3QpIHtcclxuICBpZiAoIWxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3duKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIHZhciBkeCA9IGUub2Zmc2V0WCAtIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2VzdGFydHg7XHJcbiAgdmFyIGR5ID0gZS5vZmZzZXRZIC0gbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZXN0YXJ0eTtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLnBhbnggKz0gMiAqIGR4IC8gbGF5ZXJkaWN0LnRyYW5zZm9ybS56b29tO1xyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ucGFueSArPSAyICogZHkgLyBsYXllcmRpY3QudHJhbnNmb3JtLnpvb207XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZXN0YXJ0eCA9IGUub2Zmc2V0WDtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlc3RhcnR5ID0gZS5vZmZzZXRZO1xyXG4gIGlmIChnbG9iYWxEYXRhLmdldFJlZHJhd09uRHJhZygpKSB7XHJcbiAgICByZWRyYXdDYW52YXMobGF5ZXJkaWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoZSwgbGF5ZXJkaWN0KSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgdmFyIHQgPSBsYXllcmRpY3QudHJhbnNmb3JtO1xyXG4gIHZhciB3aGVlbGRlbHRhID0gZS5kZWx0YVk7XHJcbiAgaWYgKGUuZGVsdGFNb2RlID09IDEpIHtcclxuICAgIC8vIEZGIG9ubHksIHNjcm9sbCBieSBsaW5lc1xyXG4gICAgd2hlZWxkZWx0YSAqPSAzMDtcclxuICB9IGVsc2UgaWYgKGUuZGVsdGFNb2RlID09IDIpIHtcclxuICAgIHdoZWVsZGVsdGEgKj0gMzAwO1xyXG4gIH1cclxuICB2YXIgbSA9IE1hdGgucG93KDEuMSwgLXdoZWVsZGVsdGEgLyA0MCk7XHJcbiAgLy8gTGltaXQgYW1vdW50IG9mIHpvb20gcGVyIHRpY2suXHJcbiAgaWYgKG0gPiAyKSB7XHJcbiAgICBtID0gMjtcclxuICB9IGVsc2UgaWYgKG0gPCAwLjUpIHtcclxuICAgIG0gPSAwLjU7XHJcbiAgfVxyXG4gIHQuem9vbSAqPSBtO1xyXG4gIHZhciB6b29tZCA9ICgxIC0gbSkgLyB0Lnpvb207XHJcbiAgdC5wYW54ICs9IDIgKiBlLm9mZnNldFggKiB6b29tZDtcclxuICB0LnBhbnkgKz0gMiAqIGUub2Zmc2V0WSAqIHpvb21kO1xyXG4gIHJlZHJhd0NhbnZhcyhsYXllcmRpY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRNb3VzZUhhbmRsZXJzKGRpdiwgbGF5ZXJkaWN0KSB7XHJcbiAgZGl2Lm9ubW91c2VjbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgaGFuZGxlTW91c2VDbGljayhlLCBsYXllcmRpY3QpO1xyXG4gIH1cclxuXHJcbiAgZGl2Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaGFuZGxlTW91c2VEb3duKGUsIGxheWVyZGljdCk7XHJcbiAgfTtcclxuICBkaXYub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBoYW5kbGVNb3VzZU1vdmUoZSwgbGF5ZXJkaWN0KTtcclxuICB9O1xyXG4gIGRpdi5vbm1vdXNldXAgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBoYW5kbGVNb3VzZVVwKGUsIGxheWVyZGljdCk7XHJcbiAgfTtcclxuICBkaXYub25tb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGhhbmRsZU1vdXNlVXAoZSwgbGF5ZXJkaWN0KTtcclxuICB9XHJcbiAgZGl2Lm9ud2hlZWwgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBoYW5kbGVNb3VzZVdoZWVsKGUsIGxheWVyZGljdCk7XHJcbiAgfVxyXG4gIGZvciAodmFyIGVsZW1lbnQgb2YgW2RpdiwgbGF5ZXJkaWN0LmJnLCBsYXllcmRpY3Quc2lsaywgbGF5ZXJkaWN0LmhpZ2hsaWdodF0pIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Qm9hcmRSb3RhdGlvbih2YWx1ZSkge1xyXG4gIC8qXHJcbiAgICAgIFRoZSBib2FyZCB3aGVuIGRyYXduIGJ5IGRlZmF1bHQgaXMgc2hvdyByb3RhdGVkIC0xODAgZGVncmVlcy4gXHJcbiAgICAgIFRoZSBmb2xsb3dpbmcgd2lsbCBhZGQgMTgwIGRlZ3JlZXMgdG8gd2hhdCB0aGUgdXNlciBjYWxjdWxhdGVzIHNvIHRoYXQgdGhlIFBDQlxyXG4gICAgICB3aWxsIGJlIGRyYXduIGluIHRoZSBjb3JyZWN0IG9yaWVudGF0aW9uLCBpLmUuIGRpc3BsYXllZCBhcyBzaG93biBpbiBFQ0FEIHByb2dyYW0uIFxyXG4gICAgICBJbnRlcm5hbGx5IHRoZSByYW5nZSBvZiBkZWdyZWVzIGlzIHN0b3JlZCBhcyAwIC0+IDM2MFxyXG4gICovXHJcbiAgYm9hcmRSb3RhdGlvbiA9ICh2YWx1ZSAqIDUpKzE4MDtcclxuICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImJvYXJkUm90YXRpb25cIiwgYm9hcmRSb3RhdGlvbik7XHJcbiAgLypcclxuICAgICAgRGlzcGxheSB0aGUgY29ycmVjdCByYW5nZSBvZiBkZWdyZWVzIHdoaWNoIGlzIC0xODAgLT4gMTgwLiBcclxuICAgICAgVGhlIGZvbGxvd2luZyBqdXN0IHJlbWFwcyAzNjAgZGVncmVlcyB0byBiZSBpbiB0aGUgcmFuZ2UgLTE4MCAtPiAxODAuXHJcbiAgKi9cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uRGVncmVlXCIpLnRleHRDb250ZW50ID0gKGJvYXJkUm90YXRpb24tMTgwKTtcclxuICByZXNpemVBbGwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlbmRlcigpIHtcclxuICBhbGxjYW52YXMgPSB7XHJcbiAgICBmcm9udDoge1xyXG4gICAgICB0cmFuc2Zvcm06IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgczogMSxcclxuICAgICAgICBwYW54OiAwLFxyXG4gICAgICAgIHBhbnk6IDAsXHJcbiAgICAgICAgem9vbTogMSxcclxuICAgICAgICBtb3VzZXN0YXJ0eDogMCxcclxuICAgICAgICBtb3VzZXN0YXJ0eTogMCxcclxuICAgICAgICBtb3VzZWRvd246IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBiZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGX2JnXCIpLFxyXG4gICAgICBzaWxrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZfc2xrXCIpLFxyXG4gICAgICBoaWdobGlnaHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRl9obFwiKSxcclxuICAgICAgbGF5ZXI6IFwiRlwiLFxyXG4gICAgfSxcclxuICAgIGJhY2s6IHtcclxuICAgICAgdHJhbnNmb3JtOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHM6IDEsXHJcbiAgICAgICAgcGFueDogMCxcclxuICAgICAgICBwYW55OiAwLFxyXG4gICAgICAgIHpvb206IDEsXHJcbiAgICAgICAgbW91c2VzdGFydHg6IDAsXHJcbiAgICAgICAgbW91c2VzdGFydHk6IDAsXHJcbiAgICAgICAgbW91c2Vkb3duOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgYmc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQl9iZ1wiKSxcclxuICAgICAgc2lsazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCX3Nsa1wiKSxcclxuICAgICAgaGlnaGxpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJfaGxcIiksXHJcbiAgICAgIGxheWVyOiBcIkJcIixcclxuICAgIH1cclxuICB9O1xyXG4gIGFkZE1vdXNlSGFuZGxlcnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udGNhbnZhc1wiKSwgYWxsY2FudmFzLmZyb250KTtcclxuICBhZGRNb3VzZUhhbmRsZXJzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2NhbnZhc1wiKSwgYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXNpemVBbGwsXHJcbiAgaW5pdFJlbmRlcixcclxuICByZWRyYXdDYW52YXMsXHJcbiAgZHJhd0hpZ2hsaWdodHMsXHJcbiAgc2V0Qm9hcmRSb3RhdGlvbixcclxuICBzbW9vdGhTY3JvbGxUb1Jvd1xyXG59OyIsImZ1bmN0aW9uIERyYXdEcmlsbEhvbGUoZ3VpQ29udGV4dCwgeCwgeSwgcmFkaXVzKVxyXG57XHJcbiAgICAvKiBEcmF3IHRoZSBkcmlsbCBob2xlICovXHJcbiAgICBndWlDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgZ3VpQ29udGV4dC5maWxsU3R5bGUgPSBcIiNDQ0NDQ0NcIjtcclxuICAgIGd1aUNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiNDQ0NDQ0NcIjtcclxuICAgIGd1aUNvbnRleHQuYXJjKHgseSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpO1xyXG4gICAgZ3VpQ29udGV4dC5maWxsKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFJlY3RhbmdsZShndWlDb250ZXh0LCBwYWQsIGNvbG9yLCBvdXRsaW5lKVxyXG57XHJcbiAgICBndWlDb250ZXh0LnNhdmUoKTtcclxuICAgIGd1aUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBndWlDb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcblxyXG5cclxuICAgIC8qIFxyXG4gICAgICAgIERyYXcgdGhlIHJlY3RhbmdsZSB1c2luZyBsb3cgbGV2ZWwgcHJpbWl0aXZlcy4gXHJcbiAgICAgICAgVGhlcmUgd2lsbCBiZSA0IHBvaW50cywgb25lIGZvciBlYWNoIGNvcm5lci4gXHJcblxyXG4gICAgICAgIE5PVEU6IFVzaW5nIHBvaW50cyBpbnN0ZWFkIG9mIHJlY3QgbWV0aG9kIGZvciAyIHJlYXNvbnMuIFxyXG4gICAgICAgICAgICAxKSBXaWxsIHJlcGxhY2UgZnVuY3Rpb24gd2l0aCBnZW5lcmljIHBvbHlnb24gZnVuY3Rpb24uIFxyXG4gICAgICAgICAgICAyKSByZWN0IHJlcXVpcmVzIHRoYXQgcG9pbnRzIGJlIGdpdmVuIG5vdCBiYXNlZCBvbiBjZW50ZXIsIGJ1dCBiYXNlZCBvbiB1cHBlciByaWdodFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbi5cclxuICAgICovXHJcblxyXG4gICAgbGV0IHgwID0gLXBhZC5keC8yO1xyXG4gICAgbGV0IHkwID0gLXBhZC5keS8yO1xyXG5cclxuICAgIGxldCB4MSA9ICBwYWQuZHgvMjtcclxuICAgIGxldCB5MSA9ICAtcGFkLmR5LzI7XHJcblxyXG4gICAgbGV0IHgyID0gIHBhZC5keC8yO1xyXG4gICAgbGV0IHkyID0gIHBhZC5keS8yO1xyXG5cclxuICAgIGxldCB4MyA9ICAtcGFkLmR4LzI7XHJcbiAgICBsZXQgeTMgPSAgcGFkLmR5LzI7XHJcblxyXG4gICAgZ3VpQ29udGV4dC50cmFuc2xhdGUocGFkLngsIHBhZC55KTtcclxuICAgIC8qIFxyXG4gICAgICAgUm90YXRlIG9yaWdpbiBiYXNlZCBvbiBhbmdsZSBnaXZlblxyXG4gICAgICAgTk9URTogY29tcGFyZWQgdG8gb2Jsb25nIHBhZHMsIG5vIGFkZGl0aW9uYWwgbW9kaWZpY2F0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICBvZiBhbmdsZSB0byBnZXQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSBjb3JyZWN0bHkuXHJcbiAgICAqL1xyXG4gICAgZ3VpQ29udGV4dC5yb3RhdGUoKHBhZC5hbmdsZSkqTWF0aC5QSS8xODApO1xyXG5cclxuICAgIGd1aUNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBndWlDb250ZXh0Lm1vdmVUbyh4MCx5MCk7XHJcbiAgICBndWlDb250ZXh0LmxpbmVUbyh4MSx5MSk7XHJcbiAgICBndWlDb250ZXh0LmxpbmVUbyh4Mix5Mik7XHJcbiAgICBndWlDb250ZXh0LmxpbmVUbyh4Myx5Myk7XHJcbiAgICBndWlDb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgZ3VpQ29udGV4dC5maWxsKClcclxuXHJcblxyXG4gICAgaWYocGFkLnBhZF90eXBlID09IFwidGh0XCIpXHJcbiAgICB7XHJcbiAgICAgICAgRHJhd0RyaWxsSG9sZShndWlDb250ZXh0LCAwLCAwLCBwYWQuZHJpbGwvMilcclxuICAgIH1cclxuXHJcbiAgICBndWlDb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuLypcclxuICAgIEFuIG9ibG9uZyBwYWQgY2FuIGJlIHRob3VnaHQgb2YgYXMgaGF2aW5nIGEgcmVjdGFuZ3VsYXIgbWlkZGxlIHdpdGggdHdvIHNlbWljaXJjbGUgZW5kcy4gXHJcblxyXG4gICAgRWFnbGVDQUQgcHJvdmlkZXMgcHJvdmlkZXMgdGhyZWUgcGllY2VzIG9mIGluZm9ybWF0aW9uIGZvciBnZW5lcmF0aW5nIHRoZXNlIHBhZHMuIFxyXG4gICAgICAgIDEpIENlbnRlciBwb2ludCA9IENlbnRlciBvZiBwYXJ0XHJcbiAgICAgICAgMikgRGlhbWV0ZXIgPSBkaXN0YW5jZSBmcm9tIGNlbnRlciBwb2ludCB0byBlZGdlIG9mIHNlbWljaXJjbGVcclxuICAgICAgICAzKSBFbG9uZ2F0aW9uID0lIHJhdGlvIHJlbGF0aW5nIGRpYW1ldGVyIHRvIHdpZHRoXHJcblxyXG4gICAgVGhlIGRlc2lnbiBhbHNvIGhhcyA0IHBvaW50cyBvZiAgaW50ZXJlc3QsIGVhY2ggcmVwcmVzZW50aW5nIHRoZSBcclxuICAgIGNvcm5lciBvZiB0aGUgcmVjdGFuZ2xlLiBcclxuXHJcbiAgICBUbyByZW5kZXIgdGhlIGxlbmd0aCBhbmQgd2lkdGggYXJlIGRlcml2ZWQuIFRoaXMgaXMgZGl2aWRlZCBpbiBoYWxmIHRvIGdldCB0aGUgXHJcbiAgICB2YWx1ZXMgdXNlZCB0byB0cmFuc2xhdGUgdGhlIGNlbnRyYWwgcG9pbnQgdG8gb25lIG9mIHRoZSB2ZXJ0aWNpZXMuIFxyXG5cclxuKi9cclxuZnVuY3Rpb24gT2Jsb25nKGd1aUNvbnRleHQsIGNvbG9yLCBwYWQsIGN0eG1ldGhvZClcclxue1xyXG4gICAgZ3VpQ29udGV4dC5zYXZlKCk7XHJcbiAgICBndWlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgZ3VpQ29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgXHJcbiAgICAvLyBEaWFtZXRlciBpcyB0aGUgZGlzbmNlIGZyb20gY2VudGVyIG9mIHBhZCB0byB0aXAgb2YgY2lyY2xlXHJcbiAgICAvLyBlbG9uZ2F0aW9uIGlzIGEgZmFjdG9yIHRoYXQgcmVsYXRlZCB0aGUgZGlhbWV0ZXIgdG8gdGhlIHdpZHRoXHJcbiAgICAvLyBUaGlzIGlzIHRoZSB0b3RhbCB3aWR0aFxyXG4gICAgbGV0IHdpZHRoICAgPSBwYWQuZGlhbWV0ZXIqcGFkLmVsb25nYXRpb24vMTAwO1xyXG4gICAgXHJcbiAgICAvLyBUSGUgd2lkdGggb2YgdGhlIHJlY3RhbmdsZSBpcyB0aGUgZGlhbWV0ZXIgLWhhbGYgdGhlIHJhZGl1cy5cclxuICAgIC8vIFNlZSBkb2N1bWVudGF0aW9uIG9uIGhvdyB0aGVzZSBhcmUgY2FsY3VsYXRlZC5cclxuICAgIGxldCBoZWlnaHQgID0gKHBhZC5kaWFtZXRlci13aWR0aC8yKSoyO1xyXG5cclxuICAgIC8qIENlbnRlciBwb2ludCBvZiB0b3AgaGFsZiBjaXJjbGUgKi9cclxuICAgIGxldCBjeDAgPSAwXHJcbiAgICBsZXQgY3kwID0gLWhlaWdodC8yO1xyXG5cclxuICAgIC8qIENlbnRlciBwb2ludCBvZiBsb3dlciBoYWxmIGNpcmNsZSAqL1xyXG4gICAgbGV0IGN4MSA9IDA7XHJcbiAgICBsZXQgY3kxID0gaGVpZ2h0LzI7XHJcblxyXG4gICAgbGV0IHJhZGl1cyA9IHdpZHRoLzI7XHJcblxyXG4gICAgLypcclxuICAgICAgICBUaGUgZm9sbG93aW5nIG9ubHkgcmVhbGx5IG5lZWRzIHRvIGRyYXcgdHdvIHNlbWljaXJjbGVzIGFzIGludGVybmFsbHkgdGhlIHNlbWljaXJjbGVzIHdpbGwgXHJcbiAgICAgICAgYXR0YWNoIHRvIGVhY2ggb3RoZXIgdG8gY3JlYXRlIHRoZSBjb21wbGV0ZWQgb2JqZWN0LlxyXG4gICAgICovXHJcblxyXG4gICAgLyogTW92ZSBvcmlnaW4gdG8gY2VudGVyIG9mIHBhcnQgb2YgcGFkICovXHJcbiAgICBndWlDb250ZXh0LnRyYW5zbGF0ZShwYWQueCwgcGFkLnkpO1xyXG4gICAgLyogXHJcbiAgICAgICBSb3RhdGUgb3JpZ2luIGJhc2VkIG9uIGFuZ2xlIGdpdmVuXHJcbiAgICAgICBOT1RFOiBGb3Igc29tZSByZWFzb24gRWFnbGVDQUQgaXRlbXMgYXJlIHJvdGF0ZWQgYnkgOTAgZGVncmVlcyBieSBkZWZhdWx0LiBcclxuICAgICAgICAgICAgIFRoaXMgY29ycmVjdHMgZm9yIHRoYXQgc28gaXRlbXMgYXJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXHJcbiAgICAgICAgICAgICBUaGlzIHNlZW1zIHRvIGFsc28gb25seSBiZSByZXF1aXJlZCBmb3Igb2Jsb25nIHBhZHMuIFRoaXMgaXMgbW9zdCBsaWtlbHkgZHVlIHRvIHRoZSBcclxuICAgICAgICAgICAgIGFyYyBmdW5jdGlvbnMgdXNlZC5cclxuICAgICovXHJcbiAgICBndWlDb250ZXh0LnJvdGF0ZSgocGFkLmFuZ2xlLTkwKSpNYXRoLlBJLzE4MCk7XHJcbiAgICAvKiBTdGFydCBuZXcgcGF0aCAqL1xyXG4gICAgZ3VpQ29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIC8qIERyYXcgdG9wIGhhbGYgY2lyY2xlICovXHJcbiAgICBndWlDb250ZXh0LmFyYyhjeDAsY3kwLHJhZGl1cywgTWF0aC5QSSwwICwgKTtcclxuICAgIC8qIERyYXcgdGhlIGxvd2VyIGhhbGYgY2lyY2xlICovXHJcbiAgICBndWlDb250ZXh0LmFyYyhjeDEsY3kxLHJhZGl1cywgMCwgTWF0aC5QSSApO1xyXG4gICAgLyogQ2xvc2UgdGhlIHBhdGguICovXHJcbiAgICBndWlDb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgLyogRmlsbCByZWN0YW5nbGUgd2l0aCBzcGVjaWZpZWQgY29sb3IgKi9cclxuICAgIGd1aUNvbnRleHQuZmlsbCgpXHJcblxyXG4gICAgLyogT25seSBkcmF3IGRyaWxsIGhvbGUgaWYgdGh0IHR5cGUgcGFkICovXHJcbiAgICBpZihwYWQucGFkX3R5cGUgPT0gXCJ0aHRcIilcclxuICAgIHtcclxuICAgICAgICAvKiBmaXJzdCB0d28gYXJndW1lbnRzIGFyZSAwIHNpbmNlIHNpbmNlIHRoZSBjYW52YXMgd2FzIHRyYW5zbGF0ZWQgdG8gdGhlIGNlbnRlciBcclxuICAgICAgICAgICBvZiBwYWQuIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBOT1RFOiBBc3N1bWVzIHRoYXQgZHJpbGwgaG9sZSBpcyBpbiBjZW50ZXIgb2YgcGFkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIERyYXdEcmlsbEhvbGUoZ3VpQ29udGV4dCwgMCwgMCwgcGFkLmRyaWxsLzIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gUmVzdG9yZXMgY29udGV4dCB0byBzdGF0ZSBwcmlvciB0byB0aGlzIHJlbmRlcmluZyBmdW5jdGlvbiBiZWluZyBjYWxsZWQuIFxyXG4gICAgZ3VpQ29udGV4dC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJvdW5kKGd1aUNvbnRleHQsIGNvbG9yLCBwYWQsIGN0eG1ldGhvZClcclxue1xyXG4gICAgZ3VpQ29udGV4dC5zYXZlKCk7XHJcbiAgICBndWlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgZ3VpQ29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgLypcclxuICAgICAgICBUaGUgZm9sbG93aW5nIG9ubHkgcmVhbGx5IG5lZWRzIHRvIGRyYXcgdHdvIHNlbWljaXJjbGVzIGFzIGludGVybmFsbHkgdGhlIHNlbWljaXJjbGVzIHdpbGwgXHJcbiAgICAgICAgYXR0YWNoIHRvIGVhY2ggb3RoZXIgdG8gY3JlYXRlIHRoZSBjb21wbGV0ZWQgb2JqZWN0LlxyXG4gICAgICovXHJcblxyXG5cclxuICAgIC8qIE1vdmUgb3JpZ2luIHRvIGNlbnRlciBvZiBwYXJ0IG9mIHBhZCAqL1xyXG4gICAgZ3VpQ29udGV4dC50cmFuc2xhdGUocGFkLngsIHBhZC55KTtcclxuICAgIGd1aUNvbnRleHQucm90YXRlKHBhZC5hbmdsZSpNYXRoLlBJLzE4MCk7XHJcbiAgICAvKiBTdGFydCBuZXcgcGF0aCAqL1xyXG4gICAgZ3VpQ29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIC8qIERyYXcgdG9wIGhhbGYgY2lyY2xlICovXHJcbiAgICBndWlDb250ZXh0LmFyYygwLDAscGFkLmRpYW1ldGVyLzIsIDAgLCAyKk1hdGguUEkgKTtcclxuICAgIC8qIENsb3NlIHRoZSBwYXRoLiAqL1xyXG4gICAgZ3VpQ29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIC8qIEZpbGwgcmVjdGFuZ2xlIHdpdGggc3BlY2lmaWVkIGNvbG9yICovXHJcbiAgICBndWlDb250ZXh0LmZpbGwoKVxyXG5cclxuICAgIGlmKHBhZC5wYWRfdHlwZSA9PSBcInRodFwiKVxyXG4gICAge1xyXG4gICAgICAgIERyYXdEcmlsbEhvbGUoZ3VpQ29udGV4dCwgMCwgMCwgcGFkLmRyaWxsLzIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlc3RvcmVzIGNvbnRleHQgdG8gc3RhdGUgcHJpb3IgdG8gdGhpcyByZW5kZXJpbmcgZnVuY3Rpb24gYmVpbmcgY2FsbGVkLiBcclxuICAgIGd1aUNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG4vLyBYICYgeSA9IGNlbnRlciBvZiBwb2x5Z29uXHJcbi8vIHIgPSBwb2x5Z29uXHJcbmZ1bmN0aW9uIERyYXdQb2x5Z29uKGd1aUNvbnRleHQsIGN4LCBjeSwgciwgbnVtYmVyU2lkZXMpXHJcbntcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBuID0gbnVtYmVyU2lkZXM7XHJcbiAgICBndWlDb250ZXh0LmxpbmVUbyhjeCArIHIgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIGkgLyBuKSwgY3kgKyByICogTWF0aC5zaW4oMiAqIE1hdGguUEkgKiBpIC8gbikpO1xyXG4gICAgZm9yICggaSA9IDE7IGkgPD0gbjsgaSsrKSBcclxuICAgIHtcclxuICAgICAgICBndWlDb250ZXh0LmxpbmVUbyhjeCArIHIgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIGkgLyBuKSwgY3kgKyByICogTWF0aC5zaW4oMiAqIE1hdGguUEkgKiBpIC8gbikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBPY3RhZ29uKGd1aUNvbnRleHQsIGNvbG9yLCBwYWQsIGN0eG1ldGhvZClcclxue1xyXG4gICAgZ3VpQ29udGV4dC5zYXZlKCk7XHJcbiAgICBndWlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgZ3VpQ29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgLypcclxuICAgICAgICBUaGUgZm9sbG93aW5nIG9ubHkgcmVhbGx5IG5lZWRzIHRvIGRyYXcgdHdvIHNlbWljaXJjbGVzIGFzIGludGVybmFsbHkgdGhlIHNlbWljaXJjbGVzIHdpbGwgXHJcbiAgICAgICAgYXR0YWNoIHRvIGVhY2ggb3RoZXIgdG8gY3JlYXRlIHRoZSBjb21wbGV0ZWQgb2JqZWN0LlxyXG4gICAgICovXHJcblxyXG5cclxuICAgIC8qIE1vdmUgb3JpZ2luIHRvIGNlbnRlciBvZiBwYXJ0IG9mIHBhZCAqL1xyXG4gICAgZ3VpQ29udGV4dC50cmFuc2xhdGUocGFkLngsIHBhZC55KTtcclxuICAgIC8qIFxyXG4gICAgICAgIFJvdGF0ZSBieSBhbmdsZSBhbmQgYWRkIGFuIGFkZGl0aW9uYWwgNDUvMiBkZWdyZWVzLiBUaGlzIGlzIGJlY2F1c2UgdGhlXHJcbiAgICAgICAgcG9pbnRzIG9uIGFuIG9jdGFnb24gYXJlIGJhc2VkIG9uIGJhc2VkIHdpdGggdGhlIG9yaWdpbmFsIHBvaW50IGJlaW5nIGF0IHg9MC4gVG8gcm90YXRlIFxyXG4gICAgICAgIHNvIHRoYXQgdGhlIG1pZGRsZSBvZiBvbmUgc2lkZSBpcyBkaXNwbGF5ZWQgY29ycmVjdGx5LiBcclxuXHJcbiAgICAgICAgU2VlIHRoZSBhdHRhY2hlZCBkb2N1bWVudGF0aW9uIG9uIG9jdGFnb24gZ2VvbWV0cnkuXHJcblxyXG5cclxuICAgICovXHJcbiAgICBndWlDb250ZXh0LnJvdGF0ZSgocGFkLmFuZ2xlKzQ1LzIpKk1hdGguUEkvMTgwKTtcclxuICAgIC8qIFN0YXJ0IG5ldyBwYXRoICovXHJcbiAgICBndWlDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgIC8qIFRyYW5zbGF0ZWQgb3JpZ2luIHRvIGNlbnRlciBvZiByZWN0YW5nbGUuIFNvIHggJiB5IGhlcmUgc2hhbGwgYmUgMCAqL1xyXG4gICAgbGV0IHggPSAwO1xyXG4gICAgbGV0IHkgPSAwO1xyXG4gICAgbGV0IHIgPSBwYWQuZGlhbWV0ZXIvMjtcclxuXHJcbiAgICBEcmF3UG9seWdvbihndWlDb250ZXh0LHgsIHksIHIgLDgpO1xyXG5cclxuICAgIC8qIENsb3NlIHRoZSBwYXRoLiAqL1xyXG4gICAgZ3VpQ29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIC8qIEZpbGwgcmVjdGFuZ2xlIHdpdGggc3BlY2lmaWVkIGNvbG9yICovXHJcbiAgICBndWlDb250ZXh0LmZpbGwoKVxyXG5cclxuICAgIC8qIE9ubHkgZHJhdyBkcmlsbCBob2xlIGlmIHRodCB0eXBlIHBhZCAqL1xyXG4gICAgaWYocGFkLnBhZF90eXBlID09IFwidGh0XCIpXHJcbiAgICB7XHJcbiAgICAgICAgLyogRHJhdyB0aGUgZHJpbGwgaG9sZSAqL1xyXG4gICAgICAgIGd1aUNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZ3VpQ29udGV4dC5maWxsU3R5bGUgPSBcIiNDQ0NDQ0NcIjtcclxuICAgICAgICBndWlDb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjQ0NDQ0NDXCI7XHJcbiAgICAgICAgZ3VpQ29udGV4dC5hcmMoMCwwLCBwYWQuZHJpbGwvMiwgMCwgMipNYXRoLlBJKTtcclxuICAgICAgICBndWlDb250ZXh0LmZpbGwoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIFJlc3RvcmVzIGNvbnRleHQgdG8gc3RhdGUgcHJpb3IgdG8gdGhpcyByZW5kZXJpbmcgZnVuY3Rpb24gYmVpbmcgY2FsbGVkLiBcclxuICAgIGd1aUNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgUmVjdGFuZ2xlLCBPYmxvbmcsIFJvdW5kLCBPY3RhZ29uXHJcbn1cclxuIiwiLy8gWCAmIHkgPSBjZW50ZXIgb2YgcG9seWdvblxyXG4vLyByID0gcG9seWdvblxyXG5mdW5jdGlvbiBEcmF3UG9seWdvbihndWlDb250ZXh0LCBjeCwgY3ksIHIsIG51bWJlclNpZGVzKVxyXG57XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgbiA9IG51bWJlclNpZGVzO1xyXG4gICAgZ3VpQ29udGV4dC5saW5lVG8oY3ggKyByICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gbiksIGN5ICsgciAqIE1hdGguc2luKDIgKiBNYXRoLlBJICogaSAvIG4pKTtcclxuICAgIGZvciAoIGkgPSAxOyBpIDw9IG47IGkrKykgXHJcbiAgICB7XHJcbiAgICAgICAgZ3VpQ29udGV4dC5saW5lVG8oY3ggKyByICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gbiksIGN5ICsgciAqIE1hdGguc2luKDIgKiBNYXRoLlBJICogaSAvIG4pKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVjdGFuZ2xlKGd1aUNvbnRleHQsIHBhZCwgY29sb3IsIGZpbGwpXHJcbntcclxuICAgIGd1aUNvbnRleHQuc2F2ZSgpO1xyXG4gICAgZ3VpQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGd1aUNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuXHJcblxyXG4gICAgLyogXHJcbiAgICAgICAgRHJhdyB0aGUgcmVjdGFuZ2xlIHVzaW5nIGxvdyBsZXZlbCBwcmltaXRpdmVzLiBcclxuICAgICAgICBUaGVyZSB3aWxsIGJlIDQgcG9pbnRzLCBvbmUgZm9yIGVhY2ggY29ybmVyLiBcclxuXHJcbiAgICAgICAgTk9URTogVXNpbmcgcG9pbnRzIGluc3RlYWQgb2YgcmVjdCBtZXRob2QgZm9yIDIgcmVhc29ucy4gXHJcbiAgICAgICAgICAgIDEpIFdpbGwgcmVwbGFjZSBmdW5jdGlvbiB3aXRoIGdlbmVyaWMgcG9seWdvbiBmdW5jdGlvbi4gXHJcbiAgICAgICAgICAgIDIpIHJlY3QgcmVxdWlyZXMgdGhhdCBwb2ludHMgYmUgZ2l2ZW4gbm90IGJhc2VkIG9uIGNlbnRlciwgYnV0IGJhc2VkIG9uIHVwcGVyIHJpZ2h0XHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uLlxyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgeDAgPSAtcGFkLmR4LzI7XHJcbiAgICBsZXQgeTAgPSAtcGFkLmR5LzI7XHJcblxyXG4gICAgbGV0IHgxID0gIHBhZC5keC8yO1xyXG4gICAgbGV0IHkxID0gIC1wYWQuZHkvMjtcclxuXHJcbiAgICBsZXQgeDIgPSAgcGFkLmR4LzI7XHJcbiAgICBsZXQgeTIgPSAgcGFkLmR5LzI7XHJcblxyXG4gICAgbGV0IHgzID0gIC1wYWQuZHgvMjtcclxuICAgIGxldCB5MyA9ICBwYWQuZHkvMjtcclxuXHJcbiAgICBndWlDb250ZXh0LnRyYW5zbGF0ZShwYWQueCwgcGFkLnkpO1xyXG4gICAgLyogXHJcbiAgICAgICBSb3RhdGUgb3JpZ2luIGJhc2VkIG9uIGFuZ2xlIGdpdmVuXHJcbiAgICAgICBOT1RFOiBjb21wYXJlZCB0byBvYmxvbmcgcGFkcywgbm8gYWRkaXRpb25hbCBtb2RpZmljYXRpb24gaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgIG9mIGFuZ2xlIHRvIGdldCB0aGUgYW5nbGUgdG8gcm90YXRlIGNvcnJlY3RseS5cclxuICAgICovXHJcbiAgICBndWlDb250ZXh0LnJvdGF0ZSgocGFkLmFuZ2xlKSpNYXRoLlBJLzE4MCk7XHJcblxyXG4gICAgZ3VpQ29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGd1aUNvbnRleHQubW92ZVRvKHgwLHkwKTtcclxuICAgIGd1aUNvbnRleHQubGluZVRvKHgxLHkxKTtcclxuICAgIGd1aUNvbnRleHQubGluZVRvKHgyLHkyKTtcclxuICAgIGd1aUNvbnRleHQubGluZVRvKHgzLHkzKTtcclxuICAgIGd1aUNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICBndWlDb250ZXh0LmZpbGwoKVxyXG5cclxuICAgIGd1aUNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSb3VuZChndWlDb250ZXh0LCBjb2xvciwgeCwgeSwgYW5nbGUsIGRpYW1ldGVyLCBmaWxsKVxyXG57XHJcbiAgICBndWlDb250ZXh0LnNhdmUoKTtcclxuICAgIGd1aUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBndWlDb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAvKlxyXG4gICAgICAgIFRoZSBmb2xsb3dpbmcgb25seSByZWFsbHkgbmVlZHMgdG8gZHJhdyB0d28gc2VtaWNpcmNsZXMgYXMgaW50ZXJuYWxseSB0aGUgc2VtaWNpcmNsZXMgd2lsbCBcclxuICAgICAgICBhdHRhY2ggdG8gZWFjaCBvdGhlciB0byBjcmVhdGUgdGhlIGNvbXBsZXRlZCBvYmplY3QuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgLyogTW92ZSBvcmlnaW4gdG8gY2VudGVyIG9mIHBhcnQgb2YgcGFkICovXHJcbiAgICBndWlDb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgIGd1aUNvbnRleHQucm90YXRlKGFuZ2xlKk1hdGguUEkvMTgwKTtcclxuICAgIC8qIFN0YXJ0IG5ldyBwYXRoICovXHJcbiAgICBndWlDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgLyogRHJhdyB0b3AgaGFsZiBjaXJjbGUgKi9cclxuICAgIGd1aUNvbnRleHQuYXJjKDAsMCxkaWFtZXRlci8yLCAwICwgMipNYXRoLlBJICk7XHJcbiAgICAvKiBDbG9zZSB0aGUgcGF0aC4gKi9cclxuICAgIGd1aUNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAvKiBGaWxsIHJlY3RhbmdsZSB3aXRoIHNwZWNpZmllZCBjb2xvciAqL1xyXG4gICAgZ3VpQ29udGV4dC5maWxsKClcclxuXHJcbiAgICAvLyBSZXN0b3JlcyBjb250ZXh0IHRvIHN0YXRlIHByaW9yIHRvIHRoaXMgcmVuZGVyaW5nIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZC4gXHJcbiAgICBndWlDb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gT2N0YWdvbihndWlDb250ZXh0LCBjb2xvciwgeCwgeSwgYW5nbGUsIGRpYW1ldGVyLCBmaWxsKVxyXG57XHJcbiAgICBndWlDb250ZXh0LnNhdmUoKTtcclxuICAgIGd1aUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBndWlDb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAvKlxyXG4gICAgICAgIFRoZSBmb2xsb3dpbmcgb25seSByZWFsbHkgbmVlZHMgdG8gZHJhdyB0d28gc2VtaWNpcmNsZXMgYXMgaW50ZXJuYWxseSB0aGUgc2VtaWNpcmNsZXMgd2lsbCBcclxuICAgICAgICBhdHRhY2ggdG8gZWFjaCBvdGhlciB0byBjcmVhdGUgdGhlIGNvbXBsZXRlZCBvYmplY3QuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgLyogTW92ZSBvcmlnaW4gdG8gY2VudGVyIG9mIHBhcnQgb2YgcGFkICovXHJcbiAgICBndWlDb250ZXh0LnRyYW5zbGF0ZSh4LHkpO1xyXG4gICAgLyogXHJcbiAgICAgICAgUm90YXRlIGJ5IGFuZ2xlIGFuZCBhZGQgYW4gYWRkaXRpb25hbCA0NS8yIGRlZ3JlZXMuIFRoaXMgaXMgYmVjYXVzZSB0aGVcclxuICAgICAgICBwb2ludHMgb24gYW4gb2N0YWdvbiBhcmUgYmFzZWQgb24gYmFzZWQgd2l0aCB0aGUgb3JpZ2luYWwgcG9pbnQgYmVpbmcgYXQgeD0wLiBUbyByb3RhdGUgXHJcbiAgICAgICAgc28gdGhhdCB0aGUgbWlkZGxlIG9mIG9uZSBzaWRlIGlzIGRpc3BsYXllZCBjb3JyZWN0bHkuIFxyXG5cclxuICAgICAgICBTZWUgdGhlIGF0dGFjaGVkIGRvY3VtZW50YXRpb24gb24gb2N0YWdvbiBnZW9tZXRyeS5cclxuXHJcblxyXG4gICAgKi9cclxuICAgIGd1aUNvbnRleHQucm90YXRlKChhbmdsZSs0NS8yKSpNYXRoLlBJLzE4MCk7XHJcbiAgICAvKiBTdGFydCBuZXcgcGF0aCAqL1xyXG4gICAgZ3VpQ29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAvKiBUcmFuc2xhdGVkIG9yaWdpbiB0byBjZW50ZXIgb2YgcmVjdGFuZ2xlLiBTbyB4ICYgeSBoZXJlIHNoYWxsIGJlIDAgKi9cclxuICAgIGxldCByID0gZGlhbWV0ZXIvMjtcclxuXHJcbiAgICBEcmF3UG9seWdvbihndWlDb250ZXh0LDAsIDAsIHIgLDgpO1xyXG5cclxuICAgIC8qIENsb3NlIHRoZSBwYXRoLiAqL1xyXG4gICAgZ3VpQ29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIC8qIEZpbGwgcmVjdGFuZ2xlIHdpdGggc3BlY2lmaWVkIGNvbG9yICovXHJcbiAgICBndWlDb250ZXh0LmZpbGwoKVxyXG5cclxuICAgIC8vIFJlc3RvcmVzIGNvbnRleHQgdG8gc3RhdGUgcHJpb3IgdG8gdGhpcyByZW5kZXJpbmcgZnVuY3Rpb24gYmVpbmcgY2FsbGVkLiBcclxuICAgIGd1aUNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKGd1aUNvbnRleHQsIGNvbG9yLCB4LCB5LCBhbmdsZSwgZGlhbWV0ZXIsIGZpbGwpXHJcbntcclxuICAgIGd1aUNvbnRleHQuc2F2ZSgpO1xyXG4gICAgZ3VpQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGd1aUNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgIC8qXHJcbiAgICAgICAgVGhlIGZvbGxvd2luZyBvbmx5IHJlYWxseSBuZWVkcyB0byBkcmF3IHR3byBzZW1pY2lyY2xlcyBhcyBpbnRlcm5hbGx5IHRoZSBzZW1pY2lyY2xlcyB3aWxsIFxyXG4gICAgICAgIGF0dGFjaCB0byBlYWNoIG90aGVyIHRvIGNyZWF0ZSB0aGUgY29tcGxldGVkIG9iamVjdC5cclxuICAgICAqL1xyXG5cclxuXHJcbiAgICAvKiBNb3ZlIG9yaWdpbiB0byBjZW50ZXIgb2YgcGFydCBvZiBwYWQgKi9cclxuICAgIGd1aUNvbnRleHQudHJhbnNsYXRlKHgseSk7XHJcbiAgICAvKiBcclxuICAgICAgICBSb3RhdGUgYnkgYW5nbGUgYW5kIGFkZCBhbiBhZGRpdGlvbmFsIDQ1LzIgZGVncmVlcy4gVGhpcyBpcyBiZWNhdXNlIHRoZVxyXG4gICAgICAgIHBvaW50cyBvbiBhbiBvY3RhZ29uIGFyZSBiYXNlZCBvbiBiYXNlZCB3aXRoIHRoZSBvcmlnaW5hbCBwb2ludCBiZWluZyBhdCB4PTAuIFRvIHJvdGF0ZSBcclxuICAgICAgICBzbyB0aGF0IHRoZSBtaWRkbGUgb2Ygb25lIHNpZGUgaXMgZGlzcGxheWVkIGNvcnJlY3RseS4gXHJcblxyXG4gICAgICAgIFNlZSB0aGUgYXR0YWNoZWQgZG9jdW1lbnRhdGlvbiBvbiBvY3RhZ29uIGdlb21ldHJ5LlxyXG5cclxuXHJcbiAgICAqL1xyXG4gICAgZ3VpQ29udGV4dC5yb3RhdGUoKDIyLjUrNDUvMikqTWF0aC5QSS8xODApO1xyXG4gICAgLyogU3RhcnQgbmV3IHBhdGggKi9cclxuICAgIGd1aUNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgLyogVHJhbnNsYXRlZCBvcmlnaW4gdG8gY2VudGVyIG9mIHJlY3RhbmdsZS4gU28geCAmIHkgaGVyZSBzaGFsbCBiZSAwICovXHJcbiAgICBsZXQgciA9IGRpYW1ldGVyLzI7XHJcblxyXG4gICAgRHJhd1BvbHlnb24oZ3VpQ29udGV4dCwwLCAwLCByICw0KTtcclxuXHJcbiAgICAvKiBDbG9zZSB0aGUgcGF0aC4gKi9cclxuICAgIGd1aUNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAvKiBGaWxsIHJlY3RhbmdsZSB3aXRoIHNwZWNpZmllZCBjb2xvciAqL1xyXG4gICAgZ3VpQ29udGV4dC5maWxsKClcclxuXHJcbiAgICAvLyBSZXN0b3JlcyBjb250ZXh0IHRvIHN0YXRlIHByaW9yIHRvIHRoaXMgcmVuZGVyaW5nIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZC4gXHJcbiAgICBndWlDb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgUmVjdGFuZ2xlLCBSb3VuZCwgT2N0YWdvbiwgU3F1YXJlXHJcbn1cclxuIiwiLypcclxuICBTcGxpdC5qcyAtIHYxLjMuNVxyXG4gIE1JVCBMaWNlbnNlXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL25hdGhhbmNhaGlsbC9TcGxpdC5qc1xyXG4qL1xyXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLlNwbGl0PXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXdpbmRvdyx0PWUuZG9jdW1lbnQsbj1cImFkZEV2ZW50TGlzdGVuZXJcIixpPVwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLHI9XCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIixzPWZ1bmN0aW9uKCl7cmV0dXJuITF9LG89ZS5hdHRhY2hFdmVudCYmIWVbbl0sYT1bXCJcIixcIi13ZWJraXQtXCIsXCItbW96LVwiLFwiLW8tXCJdLmZpbHRlcihmdW5jdGlvbihlKXt2YXIgbj10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uc3R5bGUuY3NzVGV4dD1cIndpZHRoOlwiK2UrXCJjYWxjKDlweClcIiwhIW4uc3R5bGUubGVuZ3RofSkuc2hpZnQoKStcImNhbGNcIixsPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgU3RyaW5nP3QucXVlcnlTZWxlY3RvcihlKTplfTtyZXR1cm4gZnVuY3Rpb24odSxjKXtmdW5jdGlvbiB6KGUsdCxuKXt2YXIgaT1BKHksdCxuKTtPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnN0eWxlW3RdPWlbdF19KX1mdW5jdGlvbiBoKGUsdCl7dmFyIG49Qih5LHQpO09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuc3R5bGVbdF09blt0XX0pfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9RVt0aGlzLmFdLG49RVt0aGlzLmJdLGk9dC5zaXplK24uc2l6ZTt0LnNpemU9ZS90aGlzLnNpemUqaSxuLnNpemU9aS1lL3RoaXMuc2l6ZSppLHoodC5lbGVtZW50LHQuc2l6ZSx0aGlzLmFHdXR0ZXJTaXplKSx6KG4uZWxlbWVudCxuLnNpemUsdGhpcy5iR3V0dGVyU2l6ZSl9ZnVuY3Rpb24gbShlKXt2YXIgdDt0aGlzLmRyYWdnaW5nJiYoKHQ9XCJ0b3VjaGVzXCJpbiBlP2UudG91Y2hlc1swXVtiXS10aGlzLnN0YXJ0OmVbYl0tdGhpcy5zdGFydCk8PUVbdGhpcy5hXS5taW5TaXplK00rdGhpcy5hR3V0dGVyU2l6ZT90PUVbdGhpcy5hXS5taW5TaXplK3RoaXMuYUd1dHRlclNpemU6dD49dGhpcy5zaXplLShFW3RoaXMuYl0ubWluU2l6ZStNK3RoaXMuYkd1dHRlclNpemUpJiYodD10aGlzLnNpemUtKEVbdGhpcy5iXS5taW5TaXplK3RoaXMuYkd1dHRlclNpemUpKSxmLmNhbGwodGhpcyx0KSxjLm9uRHJhZyYmYy5vbkRyYWcoKSl9ZnVuY3Rpb24gZygpe3ZhciBlPUVbdGhpcy5hXS5lbGVtZW50LHQ9RVt0aGlzLmJdLmVsZW1lbnQ7dGhpcy5zaXplPWVbcl0oKVt5XSt0W3JdKClbeV0rdGhpcy5hR3V0dGVyU2l6ZSt0aGlzLmJHdXR0ZXJTaXplLHRoaXMuc3RhcnQ9ZVtyXSgpW0ddfWZ1bmN0aW9uIGQoKXt2YXIgdD10aGlzLG49RVt0LmFdLmVsZW1lbnQscj1FW3QuYl0uZWxlbWVudDt0LmRyYWdnaW5nJiZjLm9uRHJhZ0VuZCYmYy5vbkRyYWdFbmQoKSx0LmRyYWdnaW5nPSExLGVbaV0oXCJtb3VzZXVwXCIsdC5zdG9wKSxlW2ldKFwidG91Y2hlbmRcIix0LnN0b3ApLGVbaV0oXCJ0b3VjaGNhbmNlbFwiLHQuc3RvcCksdC5wYXJlbnRbaV0oXCJtb3VzZW1vdmVcIix0Lm1vdmUpLHQucGFyZW50W2ldKFwidG91Y2htb3ZlXCIsdC5tb3ZlKSxkZWxldGUgdC5zdG9wLGRlbGV0ZSB0Lm1vdmUsbltpXShcInNlbGVjdHN0YXJ0XCIscyksbltpXShcImRyYWdzdGFydFwiLHMpLHJbaV0oXCJzZWxlY3RzdGFydFwiLHMpLHJbaV0oXCJkcmFnc3RhcnRcIixzKSxuLnN0eWxlLnVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLk1velVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJcIixyLnN0eWxlLnVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLk1velVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJcIix0Lmd1dHRlci5zdHlsZS5jdXJzb3I9XCJcIix0LnBhcmVudC5zdHlsZS5jdXJzb3I9XCJcIn1mdW5jdGlvbiBTKHQpe3ZhciBpPXRoaXMscj1FW2kuYV0uZWxlbWVudCxvPUVbaS5iXS5lbGVtZW50OyFpLmRyYWdnaW5nJiZjLm9uRHJhZ1N0YXJ0JiZjLm9uRHJhZ1N0YXJ0KCksdC5wcmV2ZW50RGVmYXVsdCgpLGkuZHJhZ2dpbmc9ITAsaS5tb3ZlPW0uYmluZChpKSxpLnN0b3A9ZC5iaW5kKGkpLGVbbl0oXCJtb3VzZXVwXCIsaS5zdG9wKSxlW25dKFwidG91Y2hlbmRcIixpLnN0b3ApLGVbbl0oXCJ0b3VjaGNhbmNlbFwiLGkuc3RvcCksaS5wYXJlbnRbbl0oXCJtb3VzZW1vdmVcIixpLm1vdmUpLGkucGFyZW50W25dKFwidG91Y2htb3ZlXCIsaS5tb3ZlKSxyW25dKFwic2VsZWN0c3RhcnRcIixzKSxyW25dKFwiZHJhZ3N0YXJ0XCIscyksb1tuXShcInNlbGVjdHN0YXJ0XCIscyksb1tuXShcImRyYWdzdGFydFwiLHMpLHIuc3R5bGUudXNlclNlbGVjdD1cIm5vbmVcIixyLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJub25lXCIsci5zdHlsZS5Nb3pVc2VyU2VsZWN0PVwibm9uZVwiLHIuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixvLnN0eWxlLnVzZXJTZWxlY3Q9XCJub25lXCIsby5zdHlsZS53ZWJraXRVc2VyU2VsZWN0PVwibm9uZVwiLG8uc3R5bGUuTW96VXNlclNlbGVjdD1cIm5vbmVcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsaS5ndXR0ZXIuc3R5bGUuY3Vyc29yPWosaS5wYXJlbnQuc3R5bGUuY3Vyc29yPWosZy5jYWxsKGkpfWZ1bmN0aW9uIHYoZSl7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7aWYobj4wKXt2YXIgaT1GW24tMV0scj1FW2kuYV0scz1FW2kuYl07ci5zaXplPWVbbi0xXSxzLnNpemU9dCx6KHIuZWxlbWVudCxyLnNpemUsaS5hR3V0dGVyU2l6ZSkseihzLmVsZW1lbnQscy5zaXplLGkuYkd1dHRlclNpemUpfX0pfWZ1bmN0aW9uIHAoKXtGLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5wYXJlbnQucmVtb3ZlQ2hpbGQoZS5ndXR0ZXIpLEVbZS5hXS5lbGVtZW50LnN0eWxlW3ldPVwiXCIsRVtlLmJdLmVsZW1lbnQuc3R5bGVbeV09XCJcIn0pfXZvaWQgMD09PWMmJihjPXt9KTt2YXIgeSxiLEcsRSx3PWwodVswXSkucGFyZW50Tm9kZSxEPWUuZ2V0Q29tcHV0ZWRTdHlsZSh3KS5mbGV4RGlyZWN0aW9uLFU9Yy5zaXplc3x8dS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gMTAwL3UubGVuZ3RofSksaz12b2lkIDAhPT1jLm1pblNpemU/Yy5taW5TaXplOjEwMCx4PUFycmF5LmlzQXJyYXkoayk/azp1Lm1hcChmdW5jdGlvbigpe3JldHVybiBrfSksTD12b2lkIDAhPT1jLmd1dHRlclNpemU/Yy5ndXR0ZXJTaXplOjEwLE09dm9pZCAwIT09Yy5zbmFwT2Zmc2V0P2Muc25hcE9mZnNldDozMCxPPWMuZGlyZWN0aW9ufHxcImhvcml6b250YWxcIixqPWMuY3Vyc29yfHwoXCJob3Jpem9udGFsXCI9PT1PP1wiZXctcmVzaXplXCI6XCJucy1yZXNpemVcIiksQz1jLmd1dHRlcnx8ZnVuY3Rpb24oZSxuKXt2YXIgaT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGkuY2xhc3NOYW1lPVwiZ3V0dGVyIGd1dHRlci1cIituLGl9LEE9Yy5lbGVtZW50U3R5bGV8fGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT17fTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIFN0cmluZz9pW2VdPXQ6aVtlXT1vP3QrXCIlXCI6YStcIihcIit0K1wiJSAtIFwiK24rXCJweClcIixpfSxCPWMuZ3V0dGVyU3R5bGV8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG49e30sbltlXT10K1wicHhcIixuO3ZhciBufTtcImhvcml6b250YWxcIj09PU8/KHk9XCJ3aWR0aFwiLFwiY2xpZW50V2lkdGhcIixiPVwiY2xpZW50WFwiLEc9XCJsZWZ0XCIsXCJwYWRkaW5nTGVmdFwiKTpcInZlcnRpY2FsXCI9PT1PJiYoeT1cImhlaWdodFwiLFwiY2xpZW50SGVpZ2h0XCIsYj1cImNsaWVudFlcIixHPVwidG9wXCIsXCJwYWRkaW5nVG9wXCIpO3ZhciBGPVtdO3JldHVybiBFPXUubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIGkscz17ZWxlbWVudDpsKGUpLHNpemU6VVt0XSxtaW5TaXplOnhbdF19O2lmKHQ+MCYmKGk9e2E6dC0xLGI6dCxkcmFnZ2luZzohMSxpc0ZpcnN0OjE9PT10LGlzTGFzdDp0PT09dS5sZW5ndGgtMSxkaXJlY3Rpb246TyxwYXJlbnQ6d30saS5hR3V0dGVyU2l6ZT1MLGkuYkd1dHRlclNpemU9TCxpLmlzRmlyc3QmJihpLmFHdXR0ZXJTaXplPUwvMiksaS5pc0xhc3QmJihpLmJHdXR0ZXJTaXplPUwvMiksXCJyb3ctcmV2ZXJzZVwiPT09RHx8XCJjb2x1bW4tcmV2ZXJzZVwiPT09RCkpe3ZhciBhPWkuYTtpLmE9aS5iLGkuYj1hfWlmKCFvJiZ0PjApe3ZhciBjPUModCxPKTtoKGMsTCksY1tuXShcIm1vdXNlZG93blwiLFMuYmluZChpKSksY1tuXShcInRvdWNoc3RhcnRcIixTLmJpbmQoaSkpLHcuaW5zZXJ0QmVmb3JlKGMscy5lbGVtZW50KSxpLmd1dHRlcj1jfTA9PT10fHx0PT09dS5sZW5ndGgtMT96KHMuZWxlbWVudCxzLnNpemUsTC8yKTp6KHMuZWxlbWVudCxzLnNpemUsTCk7dmFyIGY9cy5lbGVtZW50W3JdKClbeV07cmV0dXJuIGY8cy5taW5TaXplJiYocy5taW5TaXplPWYpLHQ+MCYmRi5wdXNoKGkpLHN9KSxvP3tzZXRTaXplczp2LGRlc3Ryb3k6cH06e3NldFNpemVzOnYsZ2V0U2l6ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gRS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2l6ZX0pfSxjb2xsYXBzZTpmdW5jdGlvbihlKXtpZihlPT09Ri5sZW5ndGgpe3ZhciB0PUZbZS0xXTtnLmNhbGwodCksb3x8Zi5jYWxsKHQsdC5zaXplLXQuYkd1dHRlclNpemUpfWVsc2V7dmFyIG49RltlXTtnLmNhbGwobiksb3x8Zi5jYWxsKG4sbi5hR3V0dGVyU2l6ZSl9fSxkZXN0cm95OnB9fX0pO1xyXG4iXX0=
