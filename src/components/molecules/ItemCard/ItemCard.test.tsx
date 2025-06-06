import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ItemCard} from './ItemCard';
import {useNavigation} from '@react-navigation/native';
import {useCartStore} from '../../../hooks/CartStore';
import {ThemeProvider} from '../../../hooks/theme';
import '@testing-library/jest-native/extend-expect';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../../hooks/CartStore', () => ({
  useCartStore: jest.fn(),
}));

jest.mock('react-native-config', () => ({
  BASE_URL: 'https://mock-base-url.com',
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('ItemCard', () => {
  const mockNavigate = jest.fn();
  const mockAdd = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({navigate: mockNavigate});
    (useCartStore as unknown as jest.Mock).mockReturnValue({add: mockAdd});
  });

  const defaultProps = {
    id: '1',
    title: 'Test Item',
    price: 99,
    imageUrl: '/images/item.jpg',
    style: {},
  };

  it('renders item title and price', () => {
    const {getByText} = renderWithTheme(<ItemCard {...defaultProps} />);
    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('Price: 99$')).toBeTruthy();
  });

  it('renders item image from BASE_URL', () => {
    const {getByTestId} = renderWithTheme(<ItemCard {...defaultProps} />);
    const image = getByTestId('item-image');
    expect(image.props.source.uri).toBe(
      'https://mock-base-url.com/images/item.jpg',
    );
  });

  it('navigates to details screen on card press', () => {
    const {getByText} = renderWithTheme(<ItemCard {...defaultProps} />);
    fireEvent.press(getByText('Test Item'));
    expect(mockNavigate).toHaveBeenCalledWith('Details', {id: '1'});
  });

  it('adds item to cart when "Add" is pressed', () => {
    const {getByText} = renderWithTheme(<ItemCard {...defaultProps} />);
    fireEvent.press(getByText('Add'));
    expect(mockAdd).toHaveBeenCalledWith({
      id: '1',
      name: 'Test Item',
      price: 99,
      quantity: 1,
    });
  });
});


