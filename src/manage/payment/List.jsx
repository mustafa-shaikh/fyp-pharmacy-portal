import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        accountService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        accountService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Payment</h1>
            {/* <p>All users from secure (admin only) api end point:</p> */}
            {/* <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '23%' }}>Name</th>
                        <th style={{ width: '23%' }}>Email</th>
                        <th style={{ width: '23%' }}>Role</th>
                        <th style={{ width: '23%' }}>Status</th>
                        <th style={{ width: '8%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>

                    user.id == accountService.userValue.id ? (
                        <tr key={user.id}>
                        </tr>
                    ) :
                            (<tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.hospitalStatus}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                {/* <Link to={`${path}/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link> */}
                                {/* <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button> */}
                            </td>
                        </tr>)
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };