//This is the collection for all the projects that are submitted by user

Projects = new Meteor.Collection("projects");

ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Project Name"
  },
  description: {
    type: String,
    label: "Project Description"
  },
  requirement: {
    type: String,
    label: "Skill Requirement"
  },
  leader: {
    type: String,
    label: "Leader",
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    }
  }
});

Projects.attachSchema(ProjectSchema);
