var React = require('react');

// Component that displays a single contact
var Contact = function(props) {
    return (
        <div>
            <strong>
                {props.name}
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

module.exports = Contact;