Template.profile.helpers({
  email: function() {
    if(!Meteor.user()) {
      Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
      return false;
    }else {
      return Meteor.user().emails[0].address;
    }
  },
  username: function() {
    if(!Meteor.user()) {
      Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
      return false;
    }else {
      return Meteor.user().username; //username will only be displayed if we switch over to custom user registration
    }
  },

  userProjects: function() {
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var userProjects = Projects.find({userId: userId}, {sort : {createdAt: -1}});
    //grab the userId, find all the projects that belong to this userId
    return userProjects;
  }
});
