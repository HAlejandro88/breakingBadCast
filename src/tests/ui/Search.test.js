import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Search from '../../components/ui/Search';

describe('pruebas en el componente <Search/>', () => {
    const getQuery = jest.fn();
    let wrapper = shallow(<Search getQuery={getQuery}></Search>)
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<Search getQuery={getQuery}></Search>)
    });
    test('pruebas contra el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('pruebas de que cambia el input', () => {
        const value = 'e';
        wrapper.find('input').simulate('change', {
            target: {
                value
            }
        })

        wrapper.find('form').simulate('submit')
        expect(getQuery).toHaveBeenCalledTimes(1);
        expect(wrapper.find('input').prop('value')).toBe(value)
    });

});