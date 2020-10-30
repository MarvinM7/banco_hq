import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './pages/Loading/Loading';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Cadastro'}} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Routes;
