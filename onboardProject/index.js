/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';
import { goToUsersList, registerScreens } from './utils/navigation'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children:[
                    {
                    component: {
                        name: "LoginScreen"
                    }
                }
                ]
            }
        }
    })
})

//AppRegistry.registerComponent(appName, () => App);
