Resources = new Mongo.Collection("resources");

var Schemas = {};

Schemas.Resource = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description",
    max: 1000
  }

});

Resources.attachSchema(Schemas.Resource);
