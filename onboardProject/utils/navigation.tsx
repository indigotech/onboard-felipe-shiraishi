import {Navigation} from "react-native-navigation"

import LoginPage from "../pages/LoginPage"
import UsersListPage from "../pages/UsersListPage"
import CreateUserPage from "../pages/CreateUserPage"
import { Alert } from "react-native"

export const registerScreens = () => {
    Navigation.registerComponent('LoginScreen', () => LoginPage)
    Navigation.registerComponent('UsersListScreen', () => UsersListPage)
    Navigation.registerComponent('CreateUserScreen', () => CreateUserPage)
}

export const goToUsersList = () => {
    Navigation.setRoot({root: {
        stack: {
            id: "stackMain",
            children: [
                {
                    component: {
                        name: "UsersListScreen",
                        id: "UsersListScreen"
                    }
                }
            ]
        }
}})
}

export const goToAddUser = () => {
    Navigation.push('UsersListScreen', {
        component: {
          name: 'CreateUserScreen',
          id: 'CreateUserScreen'
        }
      })
}

export const returnToList = () => {
    Navigation.pop('CreateUserScreen')
}