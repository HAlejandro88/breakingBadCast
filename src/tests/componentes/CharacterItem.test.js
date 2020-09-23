import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CharacterItem from '../../components/characters/CharacterItem';



describe('pruebas en el componente <CharacterItem/>', () => {

    const data = {
        name: 'Batman',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBYXGRgXFxYWFxoYGBgXFhoYFxcZHighGBslHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUrLS0tLS0',
        portrayed: 'Alejandro Soto',
        nickname: 'Bruce wayne',
        birthday: 'september 6',
        status: 'active'
    }

    test('debe de comparase contra el snapshot', () => {
        const wrapper = shallow(<CharacterItem item={data} />);
        expect(wrapper).toMatchSnapshot();
    })


    test('debe de traer los siguiente elementos en el snapShot', () => {
        const wrapper = shallow(<CharacterItem item={data} />);
        expect(wrapper.find('img').prop('src')).toBe(data.img)
        expect(wrapper.find('h1').text().trim()).toBe(data.name);
    })

    test('de mostrar la lista con los items', () => {
        const wrapper = shallow(<CharacterItem item={data} />);
        const lista = wrapper.find('ul');
        const listaCompleta = lista.children('li');
        expect(listaCompleta.length).toBe(4)
    })

})