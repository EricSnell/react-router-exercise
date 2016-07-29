var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
// Require components
var Contact = require('./components/contact');
var ContactList = require('./components/contactlist');
var ContactListContainer = require('./components/contactlist-container');

// The 'Router' component needs to wrap all of the routes, and takes a 'history' prop that configures how the browser history is handled (clicking back & forward in browser). Here we use 'hashHistory', which uses hash-based routing (the routes are defined as the part after a hash(#) in the url).
// We have two Route components. The second one says that when we visit '/contacts', the 'ContactListContainer' should be displayed.
var routes = (
    <Router history={hashHistory}>
        <Route path="/" />
        <Route path="/contacts" component={ContactListContainer} />
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});