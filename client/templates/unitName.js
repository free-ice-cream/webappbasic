Template.unitName.helpers({


});
Template.unitName.events({
  'submit .unitName':function(event){
  event.preventDefault();
  console.log("beep BOOP");
  var newName=event.target.newUnit.value;
  var updateName = LocalData.findOne({role: "unitName"});
  //
  LocalData.update( updateName._id , {$set: {name: newName}});
  Router.go("/input");

  

  }



});
