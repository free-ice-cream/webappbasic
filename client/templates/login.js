// const the_api_key = require('api_key')
// Template.login.onCreated( function(){

// });
//var api_key = LocalData.findOne();
// console.log("api_key  = "+apiData.findOne());
var apiSlot = apiData.findOne();
var apiId=apiSlot._id;
var foo = apiData.findOne({_id: apiId});
var meh = foo.apiKey;
console.log("api meh = "+meh);

Template.login.helpers({
  apiTest: function(){
     //return api_key;
    //return "blah blah";
  },
  auth: function(){
    console.log("auth");
  }



});
Template.login.events({
  //event.preventDefault();
  'submit .playerName':function(event){
    event.preventDefault();
    console.log("beep BOOP");
    var strings=event.target.strings.value;
    console.log(strings);
    var fix = Player.findOne();
    Player.update(fix._id, {$set :{playerName: strings}});
    var playerData =  createNewPlayer(strings);
    var pn = Player.findOne({playerName: strings});
    console.log("collections says"+pn.playerName );


  //  Router.go("/policies");

  }



});

function createNewPlayer(s){
//console.log("api_key  = "+api_key);
var newPlayer={'name': s};
	 setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", meh); }
//setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", "ea2b40c5-77ef-11e8-b325-0c4de9cfe672"); }

	$.ajax({
          // url: 'https://free-ice-cream.appspot.com/v1/players/?player=',
          url: 'https://hivemind.fic.li/v1/players/?player=',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(newPlayer),
          success: function(data) {
			      console.log(data);
            console.log("yets success of sorts");
             var player= Player.findOne();
             // console.log("player.balance= "+player.balance);
             // console.log("data.balance= "+data.balance);
             // console.log("player._id= "+player._id);
             Player.update(player._id, {$set :{balance: data.balance}});
             Player.update(player._id, {$set :{unclaimedBudget: data.unclaied_budget}});
             Player.update(player._id, {$set : {goal: data.Goal}});
             console.log("player id/ token= "+data.token);
             Player.update(player._id, {$set : {token: data.token}});
             Player.update(player._id, {$set : {id: data.id}});
             for(var i=0; i<data.policies.length;i++) {
               Policies.insert( data.policies[i] )
             }
             getGameData();
             claimBudget();
             Router.go("/policies");

           },

          error: function(error) { console.log(error); },
          beforeSend: setHeader
        });

};
function getGameData(){
  var getId=GameData.findOne();

  setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY",meh); };
  $.ajax({
          // url: 'https://free-ice-cream.appspot.com/v1/game',
          url: 'https://hivemind.fic.li/v1/game',
          type: 'GET',
          //contentType: 'application/json',
          // data: JSON.stringify(newPlayer),
          success: function(data) {
			      console.log(data);
            console.log("data.budget_per_cycle= "+data.budget_per_cycle );
             GameData.update(getId._id, {$set: {budget_per_cycle: data.budget_per_cycle}});
             GameData.update(getId._id, {$set: {max_spend_per_tick: data.max_spend_per_tick}});
             console.log("GameData updated");
            console.log(GameData.find({}));
             //
             // game_year:0,
             // game_year_start:"",
             //
             // next_game_year:0,
             // next_game_year_start:null,
             // total_active_players_inflow:0,
             // total_players_inflow:0,
             // version:""

             // for(var i=0; i<data.policies.length;i++) {
             //   Policies.insert( data.policies[i] )
             // }


           },

          error: function(error) { console.log(error); },
          beforeSend: setHeader
        });

};
function claimBudget(){
  var pl=Player.findOne();
  var playerData = Player.findOne({_id: pl._id});
  var playerToken=playerData.token;
  //var playerToken ={token:playerID};
  var playerId=playerData.id;


  console.log("playerID var = "+playerId);
  console.log("playerToken var = "+playerToken);
////

    setHeader = function(xhr) { xhr.setRequestHeader("X-API-KEY", meh);xhr.setRequestHeader("X-USER-KEY", playerToken) };
    $.ajax({
            //console.log("seq 1");
          //  headers: {"X-USER-KEY":playerID},
            // url: 'https://free-ice-cream.appspot.com/v1/players/'+playerId+'/claim_budget',
            url: 'https://hivemind.fic.li/v1/players/'+playerId+'/claim_budget',
            type: 'PUT',
            //data: playerID,
            contentType: 'application/json',
             //data: JSON.stringify(playerToken),
            success: function(data) {
  			      console.log("budget data == "+data);


             },

            error: function(error) {  console.log("seq 2"); console.log(error); },
            beforeSend: setHeader
          });

}
