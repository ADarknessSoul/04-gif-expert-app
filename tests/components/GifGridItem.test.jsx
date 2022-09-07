import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

const title = 'Soy un título';
const url = 'https://';

describe('Pruebas en el GrifGridItem', ()=> {

    test('Debe coincidir con el snapshot', ()=> {

        const { container } = render(<GifGridItem title={title} url={url}/>)
         
        expect( container ).toMatchSnapshot();

    }); 
    
    test('Debe mostrar la imagen con el URL y el ATL', ()=> {
    
        render(<GifGridItem title={title} url={url}/>);
         screen.debug();
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('El título se debe mostrar en un párrafo', ()=> {
    
        render(<GifGridItem title={title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();
    
    });

});