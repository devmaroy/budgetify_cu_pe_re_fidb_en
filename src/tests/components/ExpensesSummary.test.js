import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test( 'should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow( <ExpensesSummary expenseCount={ 1 } expensesTotal={ 299 } /> );

    expect( wrapper ).toMatchSnapshot();
});

test( 'should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow( <ExpensesSummary expenseCount={ 9 } expensesTotal={ 1545460 } /> );

    expect( wrapper ).toMatchSnapshot();
});