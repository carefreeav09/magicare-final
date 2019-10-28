import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {Notification} from './Notification';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Notification />', () => {

    beforeEach(() => {   
        wrapper = shallow(<Notification />); 
    });

    it("Should render properly", () => {
       expect(wrapper);
    });
      
});