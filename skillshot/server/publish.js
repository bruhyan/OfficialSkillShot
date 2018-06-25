Meteor.publish("projects", function() {
  return Projects.find({ leader: this.userId });
});

Meteor.publish("singleProject", function(id) {
  check(id, String);
  return Projects.find({ _id: id });
});
