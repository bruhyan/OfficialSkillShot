Template.commentsSchema.helpers({
  commentDeleteRight: function() {
    if(Meteor.userId() == this.UserId) {
      return true;
    }else {
      return false;
    }
  }
});

Template.commentsSchema.events({
  'click #deleteComment' : function() {
    //var postId = FlowRouter.getParam("id");
    Meteor.call('deleteComment', this._id, function(error) {
      if(!error) {
        Bert.alert(
          'Comment Deleted!',
          "success",
          "growl-top-right"
        );
      }else {
        Bert.alert(
          'You can not delete this comment',
          "danger",
          "growl-top-right"
        );
      }
    });
  }
});
