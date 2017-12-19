Template.draw.onCreated( function(){
  var uT = LocalData.findOne({userData: "tinsel"});
  // return getTinsel() * parseFloat(uT.unit);
  if(uT.unit >= 1){
  this.tinselUse= new ReactiveVar("tinselTrue");
}else if (uT.unit == 0 || ut.unit ==NaN) {
  this.tinselUse= new ReactiveVar("tinselFalse");
}
});

Template.draw.helpers({
  tinselUseCheck: function(){
    return  Template.instance().tinselUse.get();

  },
userNumber: function(){
  var locBool = Template.instance().tinselUse.get();
  if(locBool== "tinselTrue"){
  var uT = LocalData.findOne({userData: "tinsel"});
  return uT.unit;
}else if (locBool== "tinselFalse") {
  return 4;
}
},
tinselMicroplastics: function(){
  return getTinsel();

},

yourTree: function(){
  return userTinsel();

},
microplasticsInUk: function(){
  console.log("plasticUK() ="+plasticUK());
  return plasticUK();
},
plasticsInTheOcean: function(){
  console.log("plasticPerM()= "+plasticPerM());
  return plasticPerM();
},
videoScale: function(){
  var currentView=window.innerWidth;
  var videoWidth;
  var videoHeight;
  if(currentView > 400){
    console.log("..currentView > 400");
    return "videoSubScale";
    // videoWidth= currentView *0.7;
    // videoHeight = videoWidth/4*3;
    // console.log("videoWidth= "+videoWidth);
  }else if (currentView <=400) {
    console.log("..currentView <= 400");
    return "videoFullScale";
    // videoWidth=728;
    // videoHeight =532;
  };
}
});
///////here is some bad practice, repeating the above helpers :) /////////

Template.tinselTrue.helpers({
  tinselUseCheck: function(){
    return  Template.instance().tinselUse.get();

  },
userNumber: function(){

  var uT = LocalData.findOne({userData: "tinsel"});
  if(uT.unit >= 1){
  return uT.unit;
}else{
  return 4;
}
},
tinselMicroplastics: function(){
  return getTinsel();

},

yourTree: function(){
  return userTinsel();

},
microplasticsInUk: function(){
  console.log("plasticUK() ="+plasticUK());
  return plasticUK();
},
plasticsInTheOcean: function(){
  console.log("plasticPerM()= "+plasticPerM());
  return plasticPerM();
},
videoScale: function(){
  var currentView=window.innerWidth;
  var videoWidth;
  var videoHeight;
  if(currentView > 400){
    console.log("..currentView > 400");
    return "videoSubScale";
    // videoWidth= currentView *0.7;
    // videoHeight = videoWidth/4*3;
    // console.log("videoWidth= "+videoWidth);
  }else if (currentView <=400) {
    console.log("..currentView <= 400");
    return "videoFullScale";
    // videoWidth=728;
    // videoHeight =532;
  };
}



});
/////and again .....///////

Template.tinselFalse.helpers({
  tinselUseCheck: function(){
    return  Template.instance().tinselUse.get();

  },
userNumber: function(){
  var uT = LocalData.findOne({userData: "tinsel"});
  if(uT.unit >= 1){
  return uT.unit;
}else{
  return 4;
}
},
tinselMicroplastics: function(){
  return getTinsel();

},

yourTree: function(){
  return userTinsel();

},
microplasticsInUk: function(){
  console.log("plasticUK() ="+plasticUK());
  return plasticUK();
},
plasticsInTheOcean: function(){
  console.log("plasticPerM()= "+plasticPerM());
  return plasticPerM();
},
videoScale: function(){
  var currentView=window.innerWidth;
  var videoWidth;
  var videoHeight;
  if(currentView > 400){
    console.log("..currentView > 400");
    return "videoSubScale";
    // videoWidth= currentView *0.7;
    // videoHeight = videoWidth/4*3;
    // console.log("videoWidth= "+videoWidth);
  }else if (currentView <=400) {
    console.log("..currentView <= 400");
    return "videoFullScale";
    // videoWidth=728;
    // videoHeight =532;
  };
}



});


////


////////// NON HELPER FUNCTIONS
// function metInputKM(){
//   var cM = LocalData.findOne({system: "metric"});// the numbers input
//   return cM.unit/1000;
// };
function getSea(){
    var oV = Units.findOne({title: "Ocean Volume"});
    return oV.unit;

};
function getTinsel(){
    var tM = Units.findOne({title: "tinsel-microplastic"});
    return tM.unit;

};
function userTinsel(){
  var uT = LocalData.findOne({userData: "tinsel"});
  if(uT >=1){
  return getTinsel() * parseFloat(uT.unit);
}else{
  return getTinsel() * 4;//the use case for people who do not use tinsel
}
}
function plasticUK(){
    var hUK = Units.findOne({title: "uk households"});
    console.log("hUK.unit = "+hUK.unit );
    return (hUK.unit *.9)*userTinsel();
}
function plasticPerM(){
  return (getSea() / plasticUK()).toFixed(2);
}


// function inputKM(){//either input type cpnverted to meric. tmp until we handle imp measurements properly
//   var cS = LocalData.findOne({role: "systemChoice"});// the numbers input
//   var cM = LocalData.findOne({system: "metric"});// the numbers input
//   var cI = LocalData.findOne({system: "imperial"});// the numbers input
//   if(cS.choice=="metric"){
//     return cM.unit/1000;
//
//   }else if (cS.choice=="imperial") {
//     return (cI.unit*0.0254) /1000;
//   }
//
//
//   // return cM.unit/1000;
// };
// function convertImpToMet(){
//   //bla bla
// };
// function earthBase(){
// var lU = Units.findOne({title: "LU"});// moon orbit
// var eD = Units.findOne({title: "ED"});// earth diameter
// //
// var eDBase = eD.unit/lU.unit;//create the base ratio unit
// return eDBase;
// //
// };
// function moonBase(){
//   var lU = Units.findOne({title: "LU"});// moon orbit
//   var mD = Units.findOne({title: "MD"});// moon diameter
//   //
//   var mDBase = mD.unit/lU.unit;//
//   return mDBase;
// };
// function convertKMtoCM(km){
//   return km * 100000;
//
// };
