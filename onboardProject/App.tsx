/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginPage from './pages/LoginPage';
import UsersListPage from './pages/UsersListPage';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginPage},
    UsersList: {screen: UsersListPage}
  }
);

const App = createAppContainer(MainNavigator);

export default App;
