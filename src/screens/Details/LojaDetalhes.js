import { View, Text, Image, Button } from 'react-native';
import { styles } from './StyleDetalhes';

export default function LojaDetalhes({ route, navigation }) {
  // Pegamos os dados passados pela navegação
  const { loja } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: loja.imagem }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.nome}>{loja.nome}</Text>
        <Text style={styles.categoria}>{loja.categoria}</Text>
        <Text style={styles.descricao}>Bem-vindo à {loja.nome}! Aqui você encontra os melhores produtos da região com entrega rápida.</Text>
        
        <Button 
          title="Voltar para Home" 
          onPress={() => navigation.goBack()} 
          color="#27ae60"
        />
      </View>
    </View>
  );
}