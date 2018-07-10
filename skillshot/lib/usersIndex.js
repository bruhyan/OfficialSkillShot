import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor';
import { Index, MongoDBEngine } from 'meteor/easy:search';

UsersIndex = new EasySearch.Index({
    collection: Meteor.users,
    fields: ['username', 'emailst'],
    engine: new MongoDBEngine({
selectorPerField: function (field, searchString) {
      if ('emails' === field) {
        // return this selector if the email field is being searched
        return {
          emails: {
            $elemMatch: {
              address: { '$regex' : '.*' + searchString + '.*', '$options' : 'i' }
            },
          },
        }
      }

      // use the default otherwise
      return this.defaultConfiguration().selectorPerField(field, searchString)
    },
}),
});
//console.log(UsersIndex.search('').fetch());
