Template.home.events({
  "click .start": function() {
    if(Meteor.user() != null) {
    FlowRouter.go("create");
  }else {
    Bert.alert("Please log in to get started", "danger", "growl-top-right");
  }
  },
  "click .join": function() {
    if(Meteor.user() != null) {
    FlowRouter.go("search");
  }else {
      Bert.alert("Please log in to get started", "danger", "growl-top-right");
    }
  }
});
