import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('useFetchGif tests', () => {
    
    test('should return intial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Keylor") );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
    
    test('should return imgs filled and false loading', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Keylor") );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    
});
