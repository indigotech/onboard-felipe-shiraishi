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
import SuccessPage from 'pages/SuccessPage';

const MainNavigator = createStackNavigator({
  LoginPage: {screen: LoginPage},
});

const App = createAppContainer(MainNavigator);

// const App = () => {
//   return (
//     <LoginPage/>
//   );
// };

export default App;
