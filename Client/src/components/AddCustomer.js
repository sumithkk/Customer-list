import React from 'react';
import CustomerForm from './CustomerForm';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customers';

const AddCustomer = (props) => (
    <div style={{ marginTop: "120px" }}>
        <h3 style={{ color: "#4a4a4a" }}>Set Customer information</h3>
        <CustomerForm
            onSubmitCustomer={(customer) => {
                props.dispatch(addCustomer(customer));
                // props.history.replace('/');
            }}
        />
    </div>
);

export default connect()(AddCustomer);
