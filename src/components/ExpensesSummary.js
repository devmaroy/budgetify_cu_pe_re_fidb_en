import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ( { expenseCount, expensesHiddenCount, expensesTotal } ) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpense = numeral( expensesTotal / 100 ).format( '$0,0.00' );

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{ expenseCount }</span> { expenseWord } totalling <span>{ formattedExpense }</span></h1>
                { !!expensesHiddenCount && <p>{ expensesHiddenCount } hidden due to the filters.</p> }
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    const visibleExpenses = selectExpenses( state.expenses, state.filters );

    return {
        expenseCount: visibleExpenses.length,
        expensesHiddenCount: state.expenses.length - visibleExpenses.length,
        expensesTotal: selectExpensesTotal( visibleExpenses )
    };
};

export default connect( mapStateToProps )( ExpensesSummary );