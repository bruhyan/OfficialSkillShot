FlowRouter.route("/", {
  name: "Mainlayout",
  action() {
    BlazeLayout.render("Mainlayout", { main: "home" });
  }
});

FlowRouter.route("/about", {
  name: "about",
  action() {
    BlazeLayout.render("Mainlayout", { main: "about" });
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
    BlazeLayout.render("Mainlayout", { main: "profile" });
  }
});
