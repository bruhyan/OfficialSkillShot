//This is the collection for all the projects that are submitted by user
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(["autoform"]);

Projects = new Mongo.Collection("projects");

Projects.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Project Name"
  },
  description: {
    type: String,
    label: "Project Description"
  },
  requirements: {
    type: Array
  },
  "requirements.$": Object,
  "requirements.$.skill_name": String,
  "requirements.$.level": String,
  "requirements.$.years_experience": String,

  inProject: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  leader: {
    type: String,
    label: "Leader",
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    }
  }
});

Projects.attachSchema(ProjectSchema);

// for easy search
ProjectsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort: function() {
      return { createdAt: -1 };
    },
    selector: function(searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
      categoryFilter = options.search.props.categoryFilter;

      if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Projects,
  fields: ['ProjectTitle'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    return true;
  }
});
