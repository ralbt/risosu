Router.configure({
  // the default layout
  layoutTemplate: 'DefaultLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/resources/new', function(){
  this.render('InsertResource');
});
