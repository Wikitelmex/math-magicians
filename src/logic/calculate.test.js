import '@testing-library/jest-dom/extend-expect';
import calculate from './calculate';

describe('calculate', () => {
  test('should return object adding a new number', () => {
    expect(calculate({ total: '', next: '123', operation: '' }, '4')).toEqual({ next: '1234', total: null });
  });
  test('should return object sum of 2 numbers', () => {
    expect(calculate({ total: '2', next: '1', operation: '+' }, '=')).toEqual({ next: '3', operation: null, total: null });
  });
  test('should return object sub of 2 numbers', () => {
    expect(calculate({ total: '2', next: '1', operation: '-' }, '=')).toEqual({ next: '1', operation: null, total: null });
  });
  test('should return object mult of 2 numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: 'x' }, '=')).toEqual({ next: '4', operation: null, total: null });
  });
  test('should return object div of 2 numbers', () => {
    expect(calculate({ total: '6', next: '2', operation: '÷' }, '=')).toEqual({ next: '3', operation: null, total: null });
  });
  test('should return void object', () => {
    expect(calculate({ total: '6', next: '2', operation: '÷' }, 'AC')).toEqual({ next: '', operation: '', total: '' });
  });
});
