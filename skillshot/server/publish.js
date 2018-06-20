Meteor.publish("projects", function() {
  return Projects.find({ leader: this.userId });
});
