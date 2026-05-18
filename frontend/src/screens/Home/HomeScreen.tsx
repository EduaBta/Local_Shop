import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 1. IMPORTANTE: Adicione este import
import { StackNavigationProp } from '@react-navigation/stack'; // 2. IMPORTANTE: Para a tipagem
import { useLojas } from '../../hooks/useLojas';
import LojaCard from '../../components/LojaCard';
import { styles } from './StyleHome';
import { RootStackParamList } from '../../types'; // 3. IMPORTANTE: Busque o seu tipo de rotas (ajuste o caminho se necessário)

// Defina o tipo específico para as ações de navegação desta tela
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const { lojas, loading } = useLojas();
  
  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (loading) return <ActivityIndicator size="large" color="#27ae60" />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={lojas}
        renderItem={({ item }) => <LojaCard loja={item} />}
        keyExtractor={(item) => item.id} // Boa prática adicionar a chave
      />
      
      {/* O FAB agora vai funcionar porque o 'navigation' existe! */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}