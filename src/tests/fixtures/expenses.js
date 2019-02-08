import moment from 'moment';

export default [{
    id: '1',
    description: 'Rent',
    note: 'Last payment for this house',
    amount: 10947,
    createdAt: 0
}, {
    id: '2',
    description: 'Magic Mouse',
    note: 'This one is better',
    amount: 19900,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Gum',
    note: '',
    amount: 5500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];