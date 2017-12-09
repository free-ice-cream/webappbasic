Template.draw.helpers({

retMet: function(){
  var currentMetric = LocalData.findOne({system: "metric"});
   console.log(' metric = ' + currentMetric.unit);
  return currentMetric.unit;

},
retImp: function(){
  var currentImperial = LocalData.findOne({system: "imperial"});
  //console.log(' imperial = ' + currentImperial.unit);
  return currentImperial.unit;
},
returnLU: function(){
  var lu = Units.findOne({title: "LU"});
  //console.log(" lu.unit "+lu.unit);
return lu.unit;
},
newEarth: function(){
  console.log("newEarth parseFloat(earthBase())  = "+ parseFloat(earthBase()));
  console.log("newEarth parseFloat(metInputKM())  = "+ parseFloat(metInputKM()));
  console.log("newEarth  = "+ earthDiameter);
  var earthDiameter = parseFloat(earthBase()) * parseFloat(metInputKM());
  console.log("newEarth  = "+ earthDiameter);
  return earthDiameter;
},
newMoon: function(){
  var moonDiameter = parseFloat(moonBase()) * parseFloat(metInputKM());
  console.log("newMoon  = "+ moonDiameter);
  return moonDiameter;
}
});
////////// NON HELPER FUNCTIONS
function metInputKM(){
  var cM = LocalData.findOne({system: "metric"});// the numbers input
  return cM.unit/1000;
};
function convertImpToMet(){
  //bla bla
};
function earthBase(){
var lU = Units.findOne({title: "LU"});// moon orbit
var eD = Units.findOne({title: "ED"});// earth diameter
//
var eDBase = eD.unit/lU.unit;//create the base ratio unit
return eDBase;
//
};
function moonBase(){
  var lU = Units.findOne({title: "LU"});// moon orbit
  var mD = Units.findOne({title: "MD"});// moon diameter
  //
  var mDBase = mD.unit/lU.unit;//
  return mDBase;
};
