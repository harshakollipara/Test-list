import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../../../Features/ToDoList/Screens/Dashboard';

const stack = createStackNavigator();
export const defaultOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

const DashboardScreenStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Dashboard" component={Dashboard} options={defaultOptions} />
    </stack.Navigator>
  );
};

export default DashboardScreenStack;
