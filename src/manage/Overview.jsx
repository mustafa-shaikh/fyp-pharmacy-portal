import React from 'react';
import { Link } from 'react-router-dom';

function Overview({ match }) {
    const { path } = match;

    return (
        <div>
            <h1>Manage (#here will will show summary of All time)</h1>
            <p><Link to={`${path}/doctor`}>Manage Doctor</Link></p>
            <p><Link to={`${path}/appointment`}>Manage Appointment</Link></p>
            <p><Link to={`${path}/payment`}>Manage Payment</Link></p>
            <p><Link to={`${path}/history`}>Manage History</Link></p>
        </div>
    );
}

export { Overview };