import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("AddCategory tests", () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    });

    test('should be showed correctly', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should change input', () => {
        
        const input = wrapper.find("input");
        const value = "Hola mundo";

        input.simulate("change", { target: { value } });

        const p = wrapper.find("p");

        expect(p.text().trim()).toBe(value);

    });

    test('should not post information on submit', () => {
        
        const form = wrapper.find("form");

        form.simulate("submit", { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should call setCategories and clear input', () => {
        
        const value = "Test";
        const input = wrapper.find("input");

        input.simulate("change", { target: { value } });
        let p = wrapper.find("p");

        expect( p.text().trim() ).toBe(value);

        const form = wrapper.find("form");

        form.simulate("submit", { preventDefault(){} });
        p = wrapper.find("p");

        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( p.text().trim() ).toBe("");

    });
    

})