import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddCustomer from '../components/AddCustomer';
import EditCustomer from '../components/EditCustomer';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/customer/:customerId" component={DashBoard} />
                <Route path="/add" component={AddCustomer} />
                <Route path="/customer/edit/:customerId" component={EditCustomer} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;