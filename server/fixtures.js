if (Units.find().count() ===0){
  Units.insert({
  title: "LU",
  description: "The average orbital distance of the Moon",
  si: "km",
  unit: 385000
  });

  Units.insert({
  title: "AU",
  description: "The average orbital distance of the Sun",
  si: "km",
  unit: 149598000
  });

  Units.insert({
  title: "ED",
  description: "The diameter of the Earth",
  si: "km",
  unit: 12742
  });

  Units.insert({
  title: "MD",
  description: "The diameter of the Moon",
  si: "km",
  unit: 3474
  });

  Units.insert({
  title: "SD",
  description: "The adiameter of the Sun",
  si: "km",
  unit: 1391400
  });

};
// if (LocalData.find().count() ===0){
//   LocalData.insert({
//     system: "metric",
//     unit: null
//
//   });
//   LocalData.insert({
//     system: "imperial",
//     unit: null
//
//   });
// }
