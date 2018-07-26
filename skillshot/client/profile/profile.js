Template.profile.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("projects");
  });
  Meteor.subscribe("userInfo");
  this.editMode = new ReactiveVar(false);
});

Template.profile.helpers({
  userInfo: () => {
    var currUserId = Meteor.userId();
    return UserInfo.find({
      user : currUserId
    });
  },

  email: function() {
    if (!Meteor.user()) {
      Bert.alert(
        "you are not logged in, permission denied",
        "danger",
        "growl-top-right"
      );
      return false;
    } else {
      return Meteor.user().emails[0].address;
    }
  },

  username: function() {
    if (!Meteor.user()) {
      Bert.alert(
        "you are not logged in, permission denied",
        "danger",
        "growl-top-right"
      );
      return false;
    } else {
      return Meteor.user().username; //username will only be displayed if we switch over to custom user registration
    }
  },

  userProjects: function() {
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var userProjects = Projects.find(
      { leader: userId },
      { sort: { createdAt: -1 } }
    );
    return userProjects;
  },

  hasInfo: function() { //checks if user already had created userInfo
    var userId = Meteor.userId();
    console.log(userId);
    var exist = UserInfo.find({
      user: userId
    });
    console.log(exist);
    var test = exist.count();
    console.log(test);
    if(test == 1) {
      return true;
    }else {
      return false;
    }
  },

  updateUserInfoId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  },
  isOwner: function(user) {
    return user == Meteor.userId();
  }

});

Template.profile.events({
  'click .editProfile' : function() {
    FlowRouter.go("NewUserInfo");
  },

  'click .updateProfile' : function(event, template) {
    template.editMode.set(!template.editMode.get());
    console.log(template.editMode);
  }
});
