import { Accounts } from "meteor/accounts-base";
import { Template } from "meteor/templating";

import "./main.html";

//This extract the data of login user from database
export const Profiles = new Mongo.Collection("profiles");

// Accounts config
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

//Retrive Project data from database
Template.body.helpers({
  projects() {
    return Projects.find({});
  }
});

$(function() {
  $(".nav li a").click(function(e) {
    e.preventDefault(); //To prevent the default anchor tag behaviour
    var url = this.href;
    $(".main").load(url);
  });
});

$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
});
