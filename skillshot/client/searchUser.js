import { Session } from "meteor/session";

Template.searchUser.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("UserInfo");
  });
});

Template.searchUser.helpers({
  inputAttributes: function() {
    return { 'class': "easy-search-input", 'placeholder': "Start Searching" };
  },
  players: function() {
    return UserInfo.find({});
  },
  selectedName: function() {
    var userInfo = UserInfoIndex.config.mongoCollection.findOne({
      __originalId: Session.get("selectedUser")
    });
    return userInfo && userInfo.name;
  },
  index: function() {
    return UserInfoIndex;
  },
  resultsCount: function() {
    return UserInfoIndex.getComponentDict().get("count");
  },
  showMore: function() {
    return false;
  },
  renderTmpl: () => Template.renderTemplate,

  //integrating browse function
  userInfo: () => {
    return UserInfo.find({});
  }
});


Template.User2.helpers({
  selected: function() {
    return Session.equals("selectedUser", this.__originalId)
      ? "selected"
      : "";
  },
  userInfo: () => {
    return UserInfo.find({});
  }
});

Template.User.events({
  'click': function() {
    Session.set("selectedUser", this.__originalId);
  }
});
