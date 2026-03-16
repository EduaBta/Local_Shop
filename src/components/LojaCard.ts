import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './StyleLojaCard';

export default function LojaCard({ loja }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { loja })}
    >
      <Image source={{ uri: loja.imagem }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.nome}>{loja.nome}</Text>
        <Text style={styles.categoria}>{loja.categoria}</Text>
        <Text style={styles.distancia}>{loja.distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

