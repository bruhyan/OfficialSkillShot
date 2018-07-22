Meteor.methods({
  'addComment' : function(message, postId) {
    //get current user
    var user = Meteor.user();
    if(!user) {
      throw new Meteor.Error('You must be logged in to submit comments!');
    }

    if(!message) {
      throw new Meteor.error('Comment message cannot be empty!');
    }

    if(!postId) {
      throw new Meteor.Error('Post Id undefined!');
    }

    Comments.insert({
      Author: user.username,
      Message: message,
      UserId: user._id,
      PostId: postId,
      CreatedAt: Date()
    });
  },

  'deleteComment': function(commentId) {
    if(!commentId) {
      throw new Meteor.error('Comment Id can not be empty');
    }
    Comments.remove(commentId);
  }
});
