import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {notify} from './Toastify';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Toastify />', () => {

    it("Should test success message", () => {
        const props = {
            message:'This is test message',
            type:'success'
        };
        wrapper = mount(<notify {...props}/>); 
        expect(wrapper);
    });

    it("Should test error message", () => {
        wrapper = mount(<notify type="unSuccess"/>); 
        expect(wrapper);
    });
      
});
