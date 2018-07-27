import { Session } from "meteor/session";

Template.search.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

Template.search.helpers({
  inputAttributes: function() {
    return { class: "easy-search-input", placeholder: "Start Searching" };
  },
  players: function() {
    return Projects.find({}, { sort: { createdAt: -1 } });
  },
  selectedName: function() {
    var project = ProjectsIndex.config.mongoCollection.findOne({
      __originalId: Session.get("selectedProject")
    });
    return project && project.name;
  },
  index: function() {
    return ProjectsIndex;
  },
  resultsCount: function() {
    return ProjectsIndex.getComponentDict().get("count");
  },
  showMore: function() {
    return false;
  },
  renderTmpl: () => Template.renderTemplate,

  //integrating browse function
  projects: () => {
    return Projects.find({});
  }
});

Session.set("editMode", false);

Template.User.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
});

Template.User.helpers({
  selected: function() {
    return Session.equals("selectedProject", this.__originalId) //orignial was this.__originalId
      ? "selected"
      : "";
  },
  projects: () => {
    return Projects.find({});
  },
  //integrating browse functions
  updateProjectId: function() {
    return this._id;
  }
});

Template.User.events({
  'click': function() {
    Session.set("selectedProject", this.__originalId);
  },

  "click .toggle-menu": function() {
    //Session.set("selectedProject", this.__originalId);
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
  /*
  //integrating browse functions:
  "click .fa-trash-alt": function() {
    Meteor.call("deleteProject", this._id);
    Bert.alert("Project Deleted", "danger", "growl-top-right");
  },
  "click .fa-edit": function() {
    Session.set("editMode", !Session.get("editMode"));
  }
*/
});
