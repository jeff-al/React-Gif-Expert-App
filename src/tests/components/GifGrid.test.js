import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('GifGrid Tests', () => {
    
    const category = "Keylor";

    test('should match snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            value: true
        })

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show items after load', () => {
        
        const gifs = [{
            id: "AAA",
            url: "https://test.jpg",
            title: "Test"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            value: false
        })

        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("p").exists() ).toBe( false );
        expect( wrapper.find("GifGridItem").length ).toBe( gifs.length )

    });
    

})
