import Login from '../../../Features/Login/Screen/Login';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export const defaultOptions = {
  headerShown: false,
  gestureEnabled: false,
};


const stack = createStackNavigator();

const LoginScreenStack = () => {
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen name="Login" component={Login} options={defaultOptions} />
    </stack.Navigator>
  );
};

export default LoginScreenStack;
