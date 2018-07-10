import { Session } from "meteor/session";

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
Session.set("editMode", false);

Template.Project.events({
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
  "click .fa-trash-alt": function() {
    Meteor.call("deleteProject", this._id);
    Bert.alert(
      "Project Deleted",
      "danger",
      "growl-top-right"
    );
  },
  "click .fa-edit": function() {
    Session.set("editMode", !Session.get("editMode"));
  }
});

Template.Project.helpers({
  updateProjectId: function() {
    return this._id;
  }
});
