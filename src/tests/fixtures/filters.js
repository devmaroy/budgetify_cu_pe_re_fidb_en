import moment from 'moment';

const filters = {
    test: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    test: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add( 3, 'days' )
};

export { filters, altFilters };