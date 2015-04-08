AutoForm.addHooks(['insertResourceForm'], {
  after: {
    formType: function(error, result) {
      return 'insert';
    }
  },
  onSuccess: function(formType, result) {
    FlashMessages.sendSuccess('Success!');
    Router.go("/");
  }
});
