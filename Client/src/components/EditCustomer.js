import React from 'react';
import CustomerForm from './CustomerForm';
import { connect } from 'react-redux';
import { editCustomer } from '../actions/customers';

const EditCustomer = (props) => (
    <div className='container__box'>
        <CustomerForm
            customer={props.customer}
            onSubmitCustomer={(customer) => {
                props.dispatch(editCustomer(props.customer.id, customer));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        customer: state.find((customer) =>
            customer.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditCustomer);