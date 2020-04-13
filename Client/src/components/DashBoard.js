import React from 'react';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails'
import { connect } from 'react-redux';

const DashBoard = (props) => (
    console.log(props),
    <div className='container__list' data-test="customerListComponent">
        <CustomerList />

        <div style={{ width: "50%" }} className="card">
            <div className="cardHeader">Address List</div>
            {props.customerDetail ? (
                <CustomerDetails {...props} />
            ) : (
                    <div className="placeHolder">Click any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           customer to see the address 😉</div>
                )}
        </div>


    </div>
);

const mapStateToProps = (state) => {
    return {
        customerDetail: state.customerDetail
    };
}

export default connect(mapStateToProps)(DashBoard);