import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter from string', () => {
    const action = setTextFilter('HELLO WORLD');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'HELLO WORLD'
    });
});

test('should generate set text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORTBY_DATE'
    });
});

test('should generate sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORTBY_AMOUNT'
    });
});