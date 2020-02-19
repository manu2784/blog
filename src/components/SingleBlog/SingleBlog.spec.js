import React from "react";
import { shallow, configure, mount } from "enzyme";
import SingleBlog from "./SingleBlog";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("SingleBlog", () => {

let posts = [{
    data: {
        selftext: "jdkhgf",
        url: "https://www.reddit.com/r/reactjs/",
        author: "fdskjhfkdj",
        created:"1580630711",
        secure_media_embed:{}
    }
}
];


    it("should render single blog component", () => {

        const blog = shallow(<SingleBlog posts={posts}/>);
        expect(blog).toMatchSnapshot();
    });
});