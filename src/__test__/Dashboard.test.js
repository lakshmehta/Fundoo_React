import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../Components/Dashboard/dashboard'


Enzyme.configure({ adapter: new EnzymeAdapter })
it("renders Login component without crashing ", () => {
    // const mountWrapper = mount(<Dashboard/>)
    // console.log("wrapper", mountWrapper.debug());
    const shallowWrapper = shallow(<Dashboard/>)
    console.log("wrapper", shallowWrapper.debug());


})