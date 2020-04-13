import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCustomer } from '../actions/customers';

const Customer = ({ id, name, age, gender, dispatch }) => (
    <div>
        {/* <Link to={`/customer/edit/${id}`}> */}
        <p>{name}</p>
        {/* </Link> */}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Employee ID: {id}</span>
            <span>Age: {age}</span>
            {gender && <span style={{ margin: "0 0 5px 0" }}>Gender: {gender}</span>}
            <button className="btn" onClick={() => {
                dispatch(removeCustomer({ id }));
            }}>Remove</button>
        </div>
    </div>
);

export default connect()(Customer);