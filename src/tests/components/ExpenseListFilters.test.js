import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters={ filters }
            setTextFilter={ setTextFilter }
            sortByDate={ sortByDate }
            sortByAmount={ sortByAmount }
            setStartDate={ setStartDate }
            setEndDate={ setEndDate }
        />
    );
});

test( 'should render ExpenseListFilters correctly', () => {
    expect( wrapper ).toMatchSnapshot();
});

test( 'should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });

    expect( wrapper ).toMatchSnapshot();
});

test( 'should sort by date', () => {
    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find( 'select' ).simulate( 'change', {
        target: { value }
    });

    expect( sortByDate ).toHaveBeenCalled();
});