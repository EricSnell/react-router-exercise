var React = require('react');
var ContactList = require('./contactlist');

var CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};

module.exports = ContactListContainer;