import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter component', () => {
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCountElement = screen.getByTestId('count');
  expect(initialCountElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByText(/-/i);
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});