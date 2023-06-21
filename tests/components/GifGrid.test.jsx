import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GifGrid } from "../../src/components/GifGrid";

jest.mock('../../src/hooks/useFetchGifs')

describe('Prueabs en <GifGrid/>', () => { 

  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => { 
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });
    // screen.debug();

    render( <GifGrid category={ category } /> );
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText(category) );
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
    const gifs = [
      {
        id: 'ABC',
        title: "Saitama",
        url: 'https://localhost/sitama.jpg'
      },
      {
        id: '123',
        title: "Goku",
        url: 'https://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );
    // screen.debug();

    expect( screen.getAllByRole('img').length ).toBe(2);
    
  });

});