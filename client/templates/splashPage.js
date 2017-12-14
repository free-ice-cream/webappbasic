Template.layout.helpers({
// startButton: function(){
//   console.log("startButton called");
//   Router.go("/input");
// }

});
// function startButton(){
//   console.log("startButton called");
//   Router.go("/input");
// };
Template.layout.events({
    'click .start': function() {
      Router.go("/unitname");
        //return startButton();
    }
});
