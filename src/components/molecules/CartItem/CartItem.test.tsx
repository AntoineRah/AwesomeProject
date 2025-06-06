import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CartItem} from './CartItem';
import {ThemeProvider} from '../../../hooks/theme';
import { useCartStore } from '../../../hooks/CartStore';
jest.mock('../../../hooks/CartStore', () => ({
  useCartStore: jest.fn(),
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('CartItem', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      increment: mockIncrement,
      decrement: mockDecrement,
    });
  });

  const defaultProps = {
    id: 'item1',
    name: 'Test Product',
    price: 50,
    quantity: 3,
  };

  it('renders item name, price and quantity', () => {
    const {getByText} = renderWithTheme(<CartItem {...defaultProps} />);
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('50$')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
  });

  it('calls increment when "+" is pressed', () => {
    const {getByText} = renderWithTheme(<CartItem {...defaultProps} />);
    fireEvent.press(getByText('+'));
    expect(mockIncrement).toHaveBeenCalledWith('item1');
  });

  it('calls decrement when "-" is pressed', () => {
    const {getByText} = renderWithTheme(<CartItem {...defaultProps} />);
    fireEvent.press(getByText('-'));
    expect(mockDecrement).toHaveBeenCalledWith('item1');
  });
});
