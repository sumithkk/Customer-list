import axios from '../axios/axios';

const _addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});

export const addCustomer = (customerData = {
    id,
    name: '',
    age: '',
    gender: '',
    address1: '',
    address2: '',
    address3: ''
}) => {
    return (dispatch) => {
        const customer = {
            id: customerData.id,
            name: customerData.name,
            age: customerData.age,
            gender: customerData.gender,
            address1: customerData.address1,
            address2: customerData.address2,
            address3: customerData.address3
        };

        return axios.post('customer/create', customer).then(result => {
            dispatch(_addCustomer(result.data));
            window.location.href = "/"
        });
    };
};

const _removeCustomer = ({ id } = {}) => ({
    type: 'REMOVE_CUSTOMER',
    id
});

export const removeCustomer = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`customer/${id}`).then(() => {
            dispatch(_removeCustomer({ id }));
        })
    }
};

const _editCustomer = (id, updates) => ({
    type: 'EDIT_CUSTOMER',
    id,
    updates
});

export const editCustomer = (id, updates) => {
    return (dispatch) => {
        return axios.put(`customer/${id}`, updates).then(() => {
            dispatch(_editCustomer(id, updates));
        });
    }
};

export const _getCustomerDetail = (customerDetail) => ({
    type: 'GET_CUSTOMER_DETAIL',
    customerDetail
});

export const getCustomerDetail = id => {
    return (dispatch) => {
        return axios.get(`customer/${id}`).then(result => {
            dispatch(_getCustomerDetail(result.data));
        });
    };
};

const _getCustomers = (customers) => ({
    type: 'GET_CUSTOMERS',
    customers
});

export const getCustomers = () => {
    return (dispatch) => {
        return axios.get('customers').then(result => {
            const customers = [];

            result.data.forEach(item => {
                customers.push(item);
            });

            dispatch(_getCustomers(customers));
        });
    };
};