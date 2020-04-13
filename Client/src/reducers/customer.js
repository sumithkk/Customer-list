const customersReducerDefaultState = [
    { customerDetail: {} }
];

export default (state = customersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [
                ...state,
                action.customer
            ];
        case 'REMOVE_CUSTOMER':
            let customers = state.customers.filter(({ id }) => id !== action.id)
            return {
                ...state,
                customers: customers
            }
        case 'EDIT_CUSTOMER':
            return state.map((customer) => {
                if (customer.id === action.id) {
                    return {
                        ...customer,
                        ...action.updates
                    };
                } else {
                    return customer;
                }
            });
        case 'GET_CUSTOMERS':
            return { ...state, customers: action.customers }
        case 'GET_CUSTOMER_DETAIL':
            console.log(action.customerDetail);
            let customerDetail = action.customerDetail
            return {
                ...state,
                customerDetail: customerDetail
            };
        default:
            return state;
    }
};