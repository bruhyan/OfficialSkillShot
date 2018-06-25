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
