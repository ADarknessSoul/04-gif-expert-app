import { fireEvent, render, screen } from "@testing-library/react";
import { Gifexpertapp } from "../src/Gifexpertapp";

describe('Pruebas en GifExperApp', ()=> {

    const newCategory = 'One Punch Man'

    test('Debe agregar las categorías', ()=> {

        render(<Gifexpertapp/>);
        

        const input = screen.getByPlaceholderText('Buscar gifs');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: newCategory + '1' } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: newCategory + '2' } } );
        fireEvent.submit( form );

        // screen.debug();

        const category = screen.getAllByRole('heading', {level: 3}, { name: 'heading3'});

        expect(category.length).toBe(4);
        expect(category[2].innerHTML).toBe(newCategory);
        expect(category[1].innerHTML).toBe(newCategory + '1');
        expect(category[0].innerHTML).toBe(newCategory + '2');

    }); 

    test('No debe agregar categorias repetidas', ()=> {

        render(<Gifexpertapp/>);
        

        const input = screen.getByPlaceholderText('Buscar gifs');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: newCategory } } );
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', {level: 3}, { name: 'heading3'}).length).toBe(2);

    }); 

});