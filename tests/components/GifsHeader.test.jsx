import { render, screen } from "@testing-library/react";
import { GifsHeader } from "../../src/components/GifsHeader";

describe('Pruebas en GifsHeader', ()=> {

    const category = 'Goku'; 

    test('Debe mostrar el nombre de la categoría en el h3', ()=> {

        render(<GifsHeader category={category} onClickButton={() => {}} />);

        // screen.debug();

        expect(  screen.getByRole('heading', {level: 3}, { name: /heading3/i }).innerHTML ).toBe(category);


    }); 

});