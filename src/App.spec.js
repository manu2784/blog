import React from "react";
import { shallow, configure, mount } from "enzyme";
import App from "./App.js";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("App", () => {


    it("should render App components", () => {

        let wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();


    });

   it("should render search form",()=>{
       let  wrapper = mount(<App/>);

       expect(wrapper.find("SearchForm").length).toBe(1);

   })


});