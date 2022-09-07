import { fireEvent, render, screen } from "@testing-library/react";
import { GifLabels } from "../../src/components/GifLabels";

describe('Pruebas en GifLabels', ()=> {

    const label = 'Saitama';

    test('Debe mostrar la etiqueta en el parrafo del label', ()=> {

        render(<GifLabels label={label} onClickX={() => {}} />);

        screen.debug();

        expect(screen.getByText(label)).toBeTruthy();

    }); 

    test('Debe llamar a la función onClickX al presionar la X del label', ()=> {
    
        const onClickX = jest.fn();

        render(<GifLabels label={label} onClickX={onClickX} />);

        const imgX = screen.getByRole('img', { name: /símbolo de x/i } );

        fireEvent.click(imgX);

        expect( onClickX ).toHaveBeenCalled();
        expect( onClickX ).toHaveBeenCalledTimes(1);
        expect( onClickX ).toHaveBeenCalledWith(label.toLowerCase());

        // screen.debug();
    
    });

});