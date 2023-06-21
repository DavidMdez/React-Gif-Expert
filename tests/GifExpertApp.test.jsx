import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueabs en <GifExpertApp/>', () => { 

  test('', () => { 
    render( <GifExpertApp /> );
    screen.debug();
  });

});