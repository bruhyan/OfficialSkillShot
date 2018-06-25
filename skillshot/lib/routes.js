Accounts.onLogout(function() {
  FlowRouter.go("Mainlayout");
});

FlowRouter.triggers.enter([
  function(context, redirect) {
    if (!Meteor.userId()) {
      FlowRouter.go("Mainlayout");
    }
  }
]);

FlowRouter.route("/", {
  name: "Mainlayout",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "home" });
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
  name: "project",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "projectSingle" });
  }
});

FlowRouter.route("/current", {
  name: "current",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("Mainlayout", { main: "currrent" });
  }
});
