Template.home.events({
  "click .start": function() {
    FlowRouter.go("create");
  },
  "click .join": function() {
    FlowRouter.go("search")

  }
})
