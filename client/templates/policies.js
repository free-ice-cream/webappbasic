var sliders=0;
// var gd=GameData.findOne();
// var gameData = GameData.findOne({_id: gd._id});
// var maxSpend=gameData.max_spend_per_tick;
// console.log("maxSpend = "+maxSpend);
var apiSlot = apiData.findOne();
var apiId=apiSlot._id;
var foo = apiData.findOne({_id: apiId});
var meh = foo.apiKey;

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

    setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", meh);xhr.setRequestHeader("X-USER-KEY", playerToken) };
    $.ajax({
            // url: 'https://free-ice-cream.appspot.com/v1/players/'+playerId+'/funding',
            url: 'https://hivemind.fic.li/v1/players/'+playerId+'/funding',
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
