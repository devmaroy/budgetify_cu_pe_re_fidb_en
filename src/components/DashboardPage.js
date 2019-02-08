import React from 'react';
import { Link } from 'react-router-dom';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const DashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;