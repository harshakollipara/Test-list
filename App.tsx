import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import NavigationService from './src/Commons/Navigation/NavigationService';
import LoginScreenStack from './src/Commons/Navigation/Stacks/LoginScreenStack';
import {initI18n} from './src/Commons/Translations/I18n';
import {Provider} from 'react-redux';
import store from './store';
import DashboardScreenStack from './src/Commons/Navigation/Stacks/DashboardScreenStack';


interface AppProps {}
interface AppState {}

const root = createStackNavigator();

export const defaultOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    NavigationService;
    super(props);
    initI18n();
  }
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <root.Navigator initialRouteName="Login">
          <root.Screen
            name="Login"
            component={LoginScreenStack}
            options={defaultOptions}
          />
         
          <root.Screen
            name="Dashboard"
            component={DashboardScreenStack}
            options={defaultOptions}
          />
          
        </root.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}
