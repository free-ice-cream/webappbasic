Template.input.helpers({


});
Template.input.events({
'submit .form-input':function(event){
  event.preventDefault();
//console.table(event);
  var met = event.target.metricInput.value;
  var imp = event.target.imperialInput.value;
  console.log('Met Height = '+ met);
  console.log('Imp Height = '+ imp);
  //

  if (met != false){
    console.log('met =  true');
    var updateMetric = LocalData.findOne({system: "metric"});
    //
    LocalData.update( updateMetric._id , {$set: {unit: met}});
  //  LocalData.update( updateImperial._id , {$set: {unit: null}});
  };
  if (imp != false){
    console.log('imp =  true');
    var updateImperial= LocalData.findOne({system: "imperial"});
    //
    LocalData.update( updateImperial._id , {$set: {unit: imp}});
  //  LocalData.update( updateMetric._id , {$set: {unit: null}});
  };
  Router.go('/draw');



}
/*
{ld: }


*/
});
