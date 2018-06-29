Template.skill.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

//copy code from profile.js to filter out the projects by user
Template.skill.helpers({
  project: () => {
    return Projects.find({ inProject: true });
  }
});
