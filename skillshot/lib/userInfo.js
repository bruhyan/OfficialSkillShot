import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(["autoform"]);

UserInfo = new Mongo.Collection('userInfo');

UserInfo.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

UserInfoSchema = new SimpleSchema({
  status: {
    type: String,
    label: "Status"
  },

  title: {
    type: String,
    label: "Job Title/Label"
  },

  mySkills: {
    type: Array
  },
  "mySkills.$": Object,
  "mySkills.$.skill_name": String,
  "mySkills.$.level": String,
  "mySkills.$.years_experience": String,

  user: {
    type: String,
    label: "userID",
    autoValue: function() {
      return this.userId;
    }
  },

  username: {
    type: String,
    label: "username",
    autoValue: function() {
      return Meteor.user().username;
    }
  },

  email: {
    type: String,
    label: "email",
    autoValue: function() {
      return Meteor.user().emails[0].address;
    }
  }
})

Meteor.methods({
  deleteUserInfo: function(id) {
    UserInfo.remove(id);
  }
});

UserInfo.attachSchema(UserInfoSchema);
