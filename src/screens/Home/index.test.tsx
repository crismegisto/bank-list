import React from 'react';
import { screen } from '@testing-library/react-native';

import { renderWithProvider } from '../../../utilsTest/redux';
import Home from './index';
import { mockBanks } from '../../../utilsTest/mockBanks';

jest.mock('services/bank', () => {
  const actualService = jest.requireActual('services/bank');
  return {
    ...actualService,
    useGetAllBanksQuery: jest.fn(() => ({
      data: mockBanks
    }))
  };
});

describe('Home Tests', () => {
  test('match snapshot', () => {
    renderWithProvider(<Home />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Prove UI', async () => {
    renderWithProvider(<Home />);
    const title = await screen.findAllByTestId('title');
    expect(title).toHaveLength(5);
  });
});
