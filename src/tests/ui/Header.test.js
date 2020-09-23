import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Header from '../../components/ui/Header';
import logo from '../../img/logo.png';


describe('pruebas en ele componente <Header/>', () => {
    const wrapper = shallow(<Header logo={logo} />)
    
    test('pruebas contra el snapShot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('pruebas que tiene el componente', () => {
        const wrapper = shallow(<Header logo={logo} />)
        expect(wrapper.find('img').prop('src')).toBe(logo);
    });
});