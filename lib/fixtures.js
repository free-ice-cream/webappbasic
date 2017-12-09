if (LocalData.find().count() ===0){
  LocalData.insert({
    system: "metric",
    unit: null

  });
  LocalData.insert({
    system: "imperial",
    unit: null

  });
}
