Resources = new Mongo.Collection("resources");

var Schemas = {};

Schemas.Resource = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  tags:{
    type:[String],
    label: "Tags",
    maxCount: 3
  },
  description: {
    type: String,
    label: "Description",
    max: 1000,
    optional: true
  },
  createdAt: {
    type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      }
  }
});

Resources.attachSchema(Schemas.Resource);
