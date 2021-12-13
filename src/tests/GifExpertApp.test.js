import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Test for GifExpertApp', () => {
    
    let wrapper = shallow(<GifExpertApp />);

    beforeEach( () => {
        wrapper = shallow(<GifExpertApp />);
    })

    test('should match snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should show a list of categories', () => {
        
        const categories = ["Keylor", "Neuer"];
        wrapper = shallow(<GifExpertApp defaultCAtegories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("GifGrid").length ).toBe( categories.length );

    })
    
    

})
