import React from 'react';
import { screen } from '@testing-library/react-native';

import { renderWithProvider } from '../../../utilsTest/redux';
import ErrorFallback from './index';

const error = {
  name: 'error',
  message: 'Mock error'
};

describe('<ErrorFallback /> Tests', () => {
  it('match snapshot and button name', () => {
    renderWithProvider(<ErrorFallback error={error} resetErrorBoundary={() => jest.fn()} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
