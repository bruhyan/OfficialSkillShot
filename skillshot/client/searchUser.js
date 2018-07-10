Template.searchUser.helpers({

  userIndex: () => UsersIndex,
  
});

Template.User2.helpers({
  selected: function() {
    return Session.equals("selectedUser", this.__originalId) ? "selected" : '';
  },


});

Template.User2.events({
  'click' : function() {
    Session.set("selectedUser", this.__originalId);
  }
});
