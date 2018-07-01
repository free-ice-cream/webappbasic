var sliders=0;
// var gd=GameData.findOne();
// var gameData = GameData.findOne({_id: gd._id});
// var maxSpend=gameData.max_spend_per_tick;
// console.log("maxSpend = "+maxSpend);
// var apiSlot = apiData.findOne();
// var apiId=apiSlot._id;
// var foo = apiData.findOne({_id: apiId});
// var apiKey = foo.apiKey;
// var apiURL = foo.api;


var apiSlot = apiData.findOne();
var apiId=apiSlot._id;
var foo = apiData.findOne({_id: apiId});
var apiKey = foo.apiKey;
//
var urlSlot = apiUurl.findOne();
var urlId=urlSlot._id;
var baa = apiUurl.findOne({_id: urlId});
var apiURL = baa.apiURL;



Template.policies.helpers({
  policy: function(){

    return Policies.find({});
    //return Policies.find({}, { sort: { createdAt: -1 } });

}

});
Template.pol.helpers({
  sliderNum: function(){
    var locSlider = sliders;
    sliders +=1;
    return "slider"+locSlider;

  },
  maxFund: function(){
    var gd=GameData.findOne();
    var gameData = GameData.findOne({_id: gd._id});
    var maxSpend=gameData.max_spend_per_tick;
    console.log("maxSpend = "+maxSpend);

    return maxSpend;
  },
  showValue: function(v){

  },
  setFund: function(){

    console.log("this.value= "+this.value);
    //console.log("i= "+i);
  },
  slideStep: function(){
    var slidestep = 30;
    return slidestep;
  }

  //  var input = document.getElementById("mySlider");
  //  input.value = localStorage.getItem("foo2");
})


function setFunding(pol,fun){
  console.log("wtf?");
  var pl=Player.findOne();
  var playerData = Player.findOne({_id: pl._id});
  var playerToken=playerData.token;
  //var playerToken ={token:playerID};
  var playerId=playerData.id;
  console.log("fun= +"+fun);
  console.log("pol= +"+pol);
  var funFloat = parseFloat(fun);
  // var newPlayer={'name': s};
  var funds =[{'amount': funFloat,'from_id': playerId, 'to_id':pol  }];
  console.log("funds.amount= "+funds.amount);
  console.log("funds.to= "+funds.to_id);
  console.log("playerID var = "+playerId);
  console.log("playerToken var = "+playerToken);
////

    setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", apiKey);xhr.setRequestHeader("X-USER-KEY", playerToken) };
    $.ajax({
            // url: 'https://free-ice-cream.appspot.com/v1/players/'+playerId+'/funding',
            // url: 'https://hivemind.fic.li/v1/players/'+playerId+'/funding',
            url: apiURL+'players/'+playerId+'/funding',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(funds),
            success: function(data) {
  			      console.log("Funding data = "+data);


             },

            error: function(error) {  console.log(error); },
            beforeSend: setHeader
          });
}
Template.pol.events({
 'change input[type="range"]': function(e,t) {
  console.log(e.target);
  console.log(e.target.value);
  // fundTest(e.target.id, e.target.value);
  setFunding(e.target.id, e.target.value);
 }
});
function fundTest (i,v){
  console.log("i= "+i);
  console.log("v= "+v);


}
//

function joinTable(){

    var pl=Player.findOne();
    var playerData = Player.findOne({_id: pl._id});
    var playerToken=playerData.token;
    //var playerToken ={token:playerID};
    var playerId=playerData.id;
    var tableId ="70ed8dba-7955-11e8-8921-0edb985c5d02";//this is fine while we only have one table



  ////

      setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", apiKey);xhr.setRequestHeader("X-USER-KEY", playerToken) };
      $.ajax({
              //console.log("seq 1");
            //  headers: {"X-USER-KEY":playerID},
              // url: 'https://free-ice-cream.appspot.com/v1/players/'+playerId+'/claim_budget',
              // url: 'https://hivemind.fic.li/v1/players/'+playerId+'/table/'+tableId,
              url: apiURL+'players/'+playerId+'/table/'+tableId,
              type: 'PUT',
              //data: playerID,
              contentType: 'application/json',
               //data: JSON.stringify(playerToken),
              success: function(data) {
    			      console.log("join table data == "+data);


               },

              error: function(error) { console.log(error); },
              beforeSend: setHeader
            });

  }

  Template.joinTableBut.events({
    //event.preventDefault();
    'submit .joinScr':function(event){
      event.preventDefault();
      console.log("but press");
      joinTable();
      //console.log("beep BOOP");
      //var strings=event.target.strings.value;
    //  console.log(strings);
      //var fix = Player.findOne();
      // Player.update(fix._id, {$set :{playerName: strings}});
      // var playerData =  createNewPlayer(strings);
      // var pn = Player.findOne({playerName: strings});
      // console.log("collections says"+pn.playerName );


    //  Router.go("/policies");

    }
  });
