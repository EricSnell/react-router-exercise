var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var Contact = require('./components/contact');
var ContactList = require('./components/contactlist');
var ContactListContainer = require('./components/contactlist-container').ContactListContainer;
var ContactContainer = require('./components/contact-container');

var App = function(props) {
    return (
        <div>
            <h1>
                Contacts App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
        	<IndexRoute component={ContactListContainer} />
        	<Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});