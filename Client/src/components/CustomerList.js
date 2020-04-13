import React from 'react';
import { connect } from 'react-redux';
import Customer from './Customer';
import { Link } from 'react-router-dom';
import { getCustomerDetail } from '../actions/customers';


class CustomerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 100
        }
    }

    render() {
        return (
            <div style={{ width: "45%", marginRight: "5%" }} className="card">
                <div>
                    <div className="cardHeader">Customers</div>
                    <ul className={`${this.props.customers.length > 5 && "scroll"} cardList`}>
                        {this.props.customers.map((customer, index) => {
                            return (
                                <li key={index} onClick={() => this.setState({ selected: index })} className={this.state.selected === index ? "active" : ""}>
                                    <Link to={`/customer/${customer.id}`} onClick={() => this.props.dispatch(getCustomerDetail(customer.id))} >
                                        <Customer {...customer} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        customers: state.customers
    };
}

export default connect(mapStateToProps)(CustomerList);