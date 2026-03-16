import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import LojaDetalhes from './src/screens/Details/LojaDetalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: '#27ae60' }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'LocalShop' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={LojaDetalhes} 
          options={({ route }) => ({ title: route.params.loja.nome })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}