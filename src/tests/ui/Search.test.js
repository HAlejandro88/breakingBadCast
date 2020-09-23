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

});