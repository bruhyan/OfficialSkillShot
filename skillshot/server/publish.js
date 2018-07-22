Meteor.publish("projects", function() {
  return Projects.find({});
});

Meteor.publish("singleProject", function(id) {
  check(id, String);
  return Projects.find({ _id: id });
});

Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find(
      { _id: this.userId },
      {
        fields: { other: 1, things: 1 }
      }
    );
  } else {
    this.ready();
  }
});

Meteor.publish('comments', function() {
  return Comments.find();
});
