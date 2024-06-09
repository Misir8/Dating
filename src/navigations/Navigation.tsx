import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { ProfileSetupScreen } from '../screens/ProfileSetupScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name='Registration'
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='ProfileSetup'
          component={ProfileSetupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
