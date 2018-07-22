Template.projectSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam("id");
    self.subscribe("singleProject", id);
    Meteor.subscribe('comments');
  });
});

Template.projectSingle.helpers({
  project: () => {
    var id = FlowRouter.getParam("id");
    return Projects.findOne({ _id: id });
  },

  comments: () => {
    var id = FlowRouter.getParam("id");
    return Comments.find({PostId: id}, {sort: {createdAt: -1} });
  }
});
