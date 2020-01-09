import {useContext} from 'react';
import {NavigationContext, NavigationScreenProp, NavigationRoute} from 'react-navigation';

export function useNavigation<Params>() {
    return useContext(NavigationContext) as NavigationScreenProp<
        NavigationRoute,
        Params
    >;
}