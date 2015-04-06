Router.configure({
  // the default layout
  layoutTemplate: 'DefaultLayout'
});

Router.route('/', function () {
  this.render('Home');
});
