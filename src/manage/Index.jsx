import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Overview } from './Overview';
import { Doctor } from './doctor/Index';
import { Appointment } from './appointment/Index';
import { History } from './history/Index';
import { Payment } from './payment/Index';

function Manage({ match }) {
    const { path } = match;

    return (
        <div className="content-container">
            <div className="container-fluid">
                <div className="jumbotron">
                    <Switch>
                        <Route exact path={path} component={Overview} />
                        <Route path={`${path}/doctor`} component={Doctor} />
                        <Route path={`${path}/appointment`} component={Appointment} />
                        <Route path={`${path}/history`} component={History} />
                        <Route path={`${path}/payment`} component={Payment} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export { Manage };