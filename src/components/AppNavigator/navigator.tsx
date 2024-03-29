import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/Home';

import Routes from 'constants/routes';
import { RoutesParamList } from 'constants/routesParamList';

const Stack = createNativeStackNavigator<RoutesParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default Navigator;
