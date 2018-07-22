Template.AddComment.events({
  'submit #addCommentForm': function(event, template) {
    event.preventDefault();


    var message = event.target.addComment.value;
//get post id
    var postId = FlowRouter.getParam("id");

    //console.log(message + '//' + postId + '//');

    Meteor.call('addComment', message, postId, function (error) {
      if(!error) {
        Bert.alert(
          'Comment Submitted!',
          'success',
          'growl-top-right'
        );
      }else {
        Bert.alert(
          'Comment Submission failed!',
          'danger',
          'growl-top-right'
        );
      }
    });
  }
})
