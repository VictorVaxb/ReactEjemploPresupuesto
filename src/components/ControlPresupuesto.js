import React, { Fragment } from 'react';
import { checkPresupuesto } from '../helpers/helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({ presup, resto }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ { presup }
            </div>
            <div className={ checkPresupuesto(presup, resto) }>
                Restante: $ { resto }
            </div>
        </Fragment>
    );
};

ControlPresupuesto.propTypes = {
    presup: PropTypes.number.isRequired,
    resto: PropTypes.number.isRequired
}

export default ControlPresupuesto;