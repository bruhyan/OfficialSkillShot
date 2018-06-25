FlowRouter.route("/", {
  name: "Mainlayout",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "home" });
  }
});

FlowRouter.route("/about", {
  name: "about",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "about" });
  }
});

FlowRouter.route("/browse", {
  name: "browse",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "browse" });
  }
});

FlowRouter.route("/create", {
  name: "create",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "create" });
  }
});

FlowRouter.route("/profile", {
  name: "profile",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "profile" });
  }
});

FlowRouter.route("/project/:id", {
  name: "browse",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "projectSingle" });
  }
});
