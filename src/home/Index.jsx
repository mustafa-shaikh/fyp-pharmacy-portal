import React from 'react';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;

    return (
        <div className="content-container">
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1>Hi {user.firstName} {user.lastName}! (#here will will show summary of Today)</h1>
                </div>
            </div>
        </div>
    );
}

export { Home };