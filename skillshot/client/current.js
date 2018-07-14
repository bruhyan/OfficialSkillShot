Template.current.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

Template.current.helpers({
  projects: () => {
    return Projects.find({ inProject: true });
  }
});

Template.current.events({
  "click .toggle-menu": function() {
    Meteor.call("toggleMenuItem", this._id, this.inProject);
    if (this.inProject == false) {
      Bert.alert(
        "Project added to profile subscriptions",
        "success",
        "growl-top-right"
      );
    } else {
      Bert.alert(
        "Project removed from profile subscriptions",
        "danger",
        "growl-top-right"
      );
    }
  }
});
