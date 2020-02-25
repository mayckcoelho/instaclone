import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import logo from './assets/instagram.png'

import Feed from './pages/Feed'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={Feed} 
                    options={{ 
                        title: <Image source={logo} />,
                        headerStyle: {
                            backgroundColor: '#f5f5f5'
                        }
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};