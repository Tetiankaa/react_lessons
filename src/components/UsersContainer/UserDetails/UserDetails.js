import React from 'react';

const UserDetails = ({userDetails}) => {
    const {name} = userDetails;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export {UserDetails};