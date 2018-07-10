Template.search.helpers({
  inputAttributes: function() {
    return {'class': 'easy-search-input', 'placeholder': 'Start Searching'};
  },
  players: function() {
    return Projects.find({}, {sort: {createdAt: -1} });
  },
  selectedName: function() {
    var project = ProjectsIndex.config.mongoCollection.findOne({__originalId: Session.get("selectedProject") });
    return project && project.name;
  },
  index: function() {
    return ProjectsIndex;
  },
  resultsCount: function() {
    return ProjectsIndex.getComponentDict().get('count');
  },
  showMore: function() {
    return false;
  },
  renderTmpl: () => Template.renderTemplate
});

Template.User.helpers({
  selected: function() {
    return Session.equals("selectedProject", this.__originalId) ? "selected" : '';
  },

//integrating browse functions
  updateProjectId: function() {
    return this._id;
  }


});

Template.User.events({
  'click' : function() {
    Session.set("selectedProject", this.__originalId);
  },

  //integrating browse functions:
  "click .toggle-menu": function() {
    Meteor.call("toggleMenuItem", this._id, this.inProject);
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
