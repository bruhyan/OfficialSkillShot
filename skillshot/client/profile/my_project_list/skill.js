Template.skill.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

Template.skill.helpers({
  userProjects: function() {
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var userProjects = Projects.find(
      { leader: userId },
      { sort: { createdAt: -1 } }
    );
    return userProjects;
  }
});
