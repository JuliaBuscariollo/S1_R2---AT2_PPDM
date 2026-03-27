import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/home';
import Produtos from './src/screens/produtos';
import Contato from './src/screens/contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página Inicial'
          }}
        />

        <Stack.Screen
          name='Produtos'
          component={Produtos}
        />

        <Stack.Screen
          name='Contato'
          component={Contato}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
