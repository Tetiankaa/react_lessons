import React from 'react';

const User = (props) => {
    // let {name,age} = props;

    // let {user1:{name:newName,age:newAge}} = props;
    let {user1:{name}} = props;

    return (
        <div>
            {/*<h1>Name: {newName}</h1>*/}
            {/*<p>Age: {newAge}</p>*/}

            <h1>Name: {name}</h1>
        </div>
    );
};

export default User;