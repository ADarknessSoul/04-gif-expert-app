import { AddCategory } from "../../src/components";
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', ()=> {

    test('Debe retornar un arreglo de Gifs ', async()=> {

        const gifs = await getGifs('One punch');
        // console.log('Este es el eso: ' + gifs[0].url.includes('https'));
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({

            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });

        expect(gifs[0].url.includes('https://')).toBeTruthy()

    }); 

});