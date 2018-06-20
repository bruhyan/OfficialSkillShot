//This is the collection for all the projects that are submitted by user
<<<<<<< HEAD
import SimpleSchema from "simpl-schema";

=======
import SimpleSchema from 'simpl-schema'
>>>>>>> 338edcf78b687bc88288297d5359f59d0b260690
Projects = new Meteor.Collection("projects");

Projects.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

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
