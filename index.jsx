var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var Contact = require('./components/contact');
var ContactList = require('./components/contactlist');
var ContactListContainer = require('./components/contactlist-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" />
        <Route path="/contacts" component={ContactListContainer} />
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});