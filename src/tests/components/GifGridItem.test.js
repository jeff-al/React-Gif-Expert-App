import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Gif grid item test", () => {

    const title = "Soy un gif";
    const url = "https://Test.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should match with snapshop', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should have a <p></p> with title', () => {

        const p = wrapper.find("p");

        expect( p.text().trim() ).toBe( title );

    });

    test('should have a <img></img> with url', () => {

        const img = wrapper.find("img");

        expect( img.prop("src") ).toBe( url );
        expect( img.prop("alt") ).toBe( title );

    });

    test('should have animate fade in', () => {
        
        const div = wrapper.find("div");

        const classes = div.prop("className").split(" ");
        
        expect(classes).toContain("animate__animated")
        expect(classes).toContain("animate__bounce")

    })
    
})