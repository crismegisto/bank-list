import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { store as setupStore } from 'src/store';
import type { RootState, AppStore } from 'src/store';

export const initialStoreState = {};

interface reduxProps extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProvider = (
  component: ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: reduxProps = {}
) => {
  const wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(component, { wrapper, ...renderOptions }) };
};
