<<<<<<< HEAD
Meteor.publish("projects", function() {
  return Projects.find({ leader: this.userId });
=======
Meteor.publish('projects', function(){
  return Projects.find({author: this.userId});
>>>>>>> 338edcf78b687bc88288297d5359f59d0b260690
});
