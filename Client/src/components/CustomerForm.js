import React from 'react';

export default class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onAddress1Change = this.onAddress1Change.bind(this);
        this.onAddress2Change = this.onAddress2Change.bind(this);
        this.onAddress3Change = this.onAddress3Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: props.customer ? props.customer.name : '',
            age: props.customer ? props.customer.age : '',
            gender: props.customer ? props.customer.gender : '',
            address1: props.customer ? props.customer.address1 : '',
            address2: props.customer ? props.customer.address2 : '',
            address3: props.customer ? props.customer.address3 : '',
            error: ''
        };
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }

    onAgeChange(e) {
        const age = e.target.value;
        this.setState(() => ({ age: age }));
    }

    onGenderChange(e) {
        const gender = e.target.value;
        this.setState(() => ({ gender: gender }));
    }

    onAddress1Change(e) {
        const address1 = e.target.value;
        this.setState(() => ({ address1: address1 }));
    }

    onAddress2Change(e) {
        const address2 = e.target.value;
        this.setState(() => ({ address2: address2 }));
    }

    onAddress3Change(e) {
        const address3 = e.target.value;
        this.setState(() => ({ address3: address3 }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.name || !this.state.age || !this.state.address1) {
            this.setState(() => ({ error: 'Please set name, age & Home Address !' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitCustomer(
                {
                    name: this.state.name,
                    age: this.state.age,
                    gender: this.state.gender,
                    address1: this.state.address1,
                    address2: this.state.address2,
                    address3: this.state.address3
                }
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-customer-form'>
                    <div style={{ display: "flex" }}>
                        <input type="text" placeholder="name" autoFocus
                            value={this.state.name}
                            onChange={this.onNameChange} />

                        <input type="text" placeholder="age"
                            value={this.state.age}
                            onChange={this.onAgeChange} />

                        <input type="text" placeholder="gender"
                            value={this.state.gender}
                            onChange={this.onGenderChange} />
                    </div>

                    <br />

                    <textarea placeholder="Home Address"
                        value={this.state.address1}
                        onChange={this.onAddress1Change} />
                    <br />

                    <textarea placeholder="Office Address"
                        value={this.state.address2}
                        onChange={this.onAddress2Change} />
                    <br />

                    <textarea placeholder="Other Address"
                        value={this.state.address3}
                        onChange={this.onAddress3Change} />
                    <br />
                    <button className="btn">Add customer</button>
                </form>
            </React.Fragment>
        );
    }
}