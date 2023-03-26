import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { bankApi } from 'services/bank';
import Reactotron from 'config/reactotronConfig';

const rootReducer = combineReducers({
  [bankApi.reducerPath]: bankApi.reducer
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bankApi.middleware),
    enhancers: [Reactotron.createEnhancer!()]
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
