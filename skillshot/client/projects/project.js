//Meteor.subscribe("projects");

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
