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
});

Template.User.events({
  'click' : function() {
    Session.set("selectedProject", this.__originalId);
  }
});
