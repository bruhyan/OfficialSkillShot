FlowRouter.route("/", {
  name: "layout",
  action() {
    BlazeLayout.render("layout");
  }
});

FlowRouter.route("/about", {
  name: "about",
  action() {
    BlazeLayout.render("about");
  }
});

FlowRouter.route("/browse", {
  name: "browse",
  action() {
    BlazeLayout.render("browse");
  }
});

FlowRouter.route("/create", {
  name: "create",
  action() {
    BlazeLayout.render("create");
  }
});

FlowRouter.route("/profile", {
  name: "profile",
  action() {
    BlazeLayout.render("profile");
  }
});
