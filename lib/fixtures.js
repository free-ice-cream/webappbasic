// if (LocalData.find().count() ===0){
//   LocalData.insert({
//     userData: "tinsel",
//     unit: 0
//
//   });
//
// };
if(Player.find().count() ===0){
  Player.insert({
    playerName: "this is a really unlikley name",
    goal: {},
    policies:{},
    table: "",
    token: "",
    unclaimedBudget: 0,
    balance: 0,
    id:""

  });
};
if (GameData.find().count() ===0){
  console.log("Fixtures set");
  GameData.insert({
    budget_per_cycle: 0,
    game_year:0,
    game_year_start:"",
    max_spend_per_tick:0,
    next_game_year:0,
    next_game_year_start:null,
    total_active_players_inflow:0,
    total_players_inflow:0,
    version:""
  })
};
//
const api_key ="ea2b40c5-77ef-11e8-b325-0c4de9cfe672";//new server
apiData= new Mongo.Collection(null);
console.log("This js file is real"+ api_key);

if (apiData.find().count() ===0){
  apiData.insert({
    apiKey: api_key
  });

};
