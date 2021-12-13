import { getGifs } from "../../helpers/getGifs"

describe('getGifs Test', () => {
    
    test('should get 10 elements', async () => {
        
        const gifs = await getGifs("Keylor");

        expect(gifs.length).toBe(10);

    })

    test('should get an empty array', async () => {
        
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0);

    })
    

})
