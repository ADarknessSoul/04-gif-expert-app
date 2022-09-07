import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGris.jsx', ()=> {

    const category = 'One punch';

    test('Debe mostrar el loading inicialmente', ()=> {
    
        useFetchGifs.mockReturnValue({

            images: [],
            isLoading: true

        });

        render( <GifGrid category={category}/>);

        // screen.debug();

        expect(screen.getByText(category)).toBeTruthy();

    }); 

    test('Debe mostrar items cuando se cargan las imagenes del useFetchGifs', ()=> {
    
        const gifs = [
            
        {

            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost5703/Saitama.jpg'

        },

        {

            id: '123',
            title: 'Goku',
            url: 'https://localhost5703/Goku.jpg'

        }

        
    
    ]

        useFetchGifs.mockReturnValue({

            images: gifs,
            isLoading: false

        });


        render( <GifGrid category={category}/>);

        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    
    });

});