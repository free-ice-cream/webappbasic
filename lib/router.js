Router.configure({
  layoutTemplate:'layout'
});
Router.route('/', {name: 'splashPage'});
Router.route('/unitname', {name: 'unitName'});
Router.route('/input', {name: 'input'});
Router.route('/draw', {name: 'draw'});
