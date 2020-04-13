import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
}

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}


describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('should render the Header Component', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    });
    it('Header Component has Header Navigation', () => {
        const wrapper = findByTestAttr(component, 'headerNav')
        expect(wrapper.length).toBe(1);
    });
});