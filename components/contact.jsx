var React = require('react');

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