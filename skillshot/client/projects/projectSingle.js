Template.projectSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam("id");
    self.subscribe("singleProject", id);
    Meteor.subscribe('comments');
  });
  this.editMode = new ReactiveVar(false);
});

Template.projectSingle.helpers({
  project: () => {
    var id = FlowRouter.getParam("id");
    return Projects.findOne({ _id: id });
  },

  comments: () => {
    var id = FlowRouter.getParam("id");
    return Comments.find({PostId: id}, {sort: {createdAt: -1} });
  },

  updateProjectId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  },
  isOwner: function(author_id) {
    return author_id == Meteor.userId();
  }
});

Template.projectSingle.events({
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
  },
  "click .fa-edit": function(event, template) {
    template.editMode.set(!template.editMode.get());
  },
  "click .delete-project": function(template) {
    Meteor.call("deleteProject", this._id);
    Bert.alert("Project Deleted", "danger", "growl-top-right");
  }
});
