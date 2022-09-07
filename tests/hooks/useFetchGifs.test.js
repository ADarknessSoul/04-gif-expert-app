import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el custom hook useFetchGifs', ()=> {

    test('Debe regresar el estado inicial', ()=> {

        const { result } = renderHook( () => useFetchGifs('One punch man', 3) ); //Renderiza el hook sin tener que utilizar un functional component
        const { images, isLoading } = result.current;

        // console.log(result);

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    }); 

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async()=> {
    
        const { result } = renderHook( () => useFetchGifs('One punch man', 3) );
        
        await waitFor(

            () => expect(result.current.images.length).toBeGreaterThan(0), //Se manda una función booleana para esperar por el resultado del Hook

            {

                timeout: 10000 //Se especifica un tiempo de espera por si el servidor se cayó

            }

        );

        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


    });

});