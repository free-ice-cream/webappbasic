Router.configure({
  layoutTemplate:'layout'
});
Router.route('/', {name: 'splashPage'});
Router.route('/input', {name: 'input'});
Router.route('/draw', {name: 'draw'});
