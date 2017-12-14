if (LocalData.find().count() ===0){
  LocalData.insert({
    system: "metric",
    unit: null

  });
  LocalData.insert({
    system: "imperial",
    unit: null

  });
  LocalData.insert({
    role: "unitName",
    name: null
  });
  LocalData.insert({
    role: "systemChoice",
    choice: null
  });
}
