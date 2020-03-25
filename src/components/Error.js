import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
    return (
        <div>
            <p className="alet alert-danger error">{ error }</p>
        </div>
    );
};

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error;