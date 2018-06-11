FlowRouter.route("/", {
  name: "layout",
  action() {
    BlazeLayout.render("layout");
  }
});

FlowRouter.route("/about", {
  name: "about",
  action() {
    BlazeLayout.render({ main: "about" });
  }
});

FlowRouter.route("/browse", {
  name: "browse",
  action() {
    BlazeLayout.render({ main: "browse" });
  }
});

FlowRouter.route("/create", {
  name: "create",
  action() {
    BlazeLayout.render("create.html");
  }
});

FlowRouter.route("/profile", {
  name: "profile",
  action() {
    BlazeLayout.render("profile.html");
  }
});
