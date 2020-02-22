import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Screens/Home';
import Description from './Screens/Description';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Heros" component={Home} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}
