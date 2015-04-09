Router.configure({
  // the default layout
  layoutTemplate: 'DefaultLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/resources/new', function(){
  this.render('insertResource');
});
