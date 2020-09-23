import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CharacterItem from '../../components/characters/CharacterGrid';
import CharacterGrid from '../../components/characters/CharacterGrid';

describe('pruebas en el componente <CharacterGrid />', () => {

    const data = [
        {
            id: 1,
            name: 'Batman',
            img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBYXGRgXFxYWFxoYGBgXFhoYFxcZHighGBslHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUrLS0tLS0',
            portrayed: 'Alejandro Soto',
            nickname: 'Bruce wayne',
            birthday: 'september 6',
            status: 'active'
        }
    ];

    let isLoading = true;
    test('prueba contra el snapshot', () => {
        const wrapper = shallow(<CharacterGrid items={data} isLoading={isLoading} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('prueba de que no exite el componente cuando la propiedad isLoading es false', () => {
        let loading = false;
        const wrapper = shallow(<CharacterGrid items={data} isLoading={false} />)
        expect(wrapper.find('CharacterItem').exists()).toBe(true)
    });

    test('perueba de mostrar el componete de spinner cuando isLoading es true', () => {
        const wrapper = shallow(<CharacterGrid items={data} isLoading={isLoading} />);
        expect(wrapper.find('Spinner').exists()).toBe(true)
    });
});