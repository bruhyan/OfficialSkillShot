Meteor.subscribe("projects");

Template.browse.helpers({
  projects: () => {
    return Projects.find({});
  }
});
