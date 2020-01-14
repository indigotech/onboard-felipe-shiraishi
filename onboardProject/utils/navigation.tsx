import {Navigation} from "react-native-navigation"

import LoginPage from "../pages/LoginPage"
import UsersListPage from "../pages/UsersListPage"

export const registerScreens = () => {
    Navigation.registerComponent('LoginScreen', () => LoginPage)
    Navigation.registerComponent('UsersListScreen', () => UsersListPage)

    console.log("Todas as telas foram registradas")
}

export const goToUsersList = () => {
    Navigation.setRoot({root: {
        stack: {
            id: "stackMain",
            children: [
                {
                    component: {
                        name: "UsersListScreen"
                    }
                }
            ]
        }
}})
}