Template.browse.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

Template.browse.helpers({
  projects: () => {
    return Projects.find({});
  }
});

Template.Project.events({
  "click .toggle-menu": function() {
    Meteor.call("toggleMenuItem", this._id, this.inProject);
  }
});
