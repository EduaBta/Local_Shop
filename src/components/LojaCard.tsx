import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './StyleLojaCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { Loja } from '../@types/loja';

interface Props {
  loja: Loja;
}

type RootStackParamList = {
  Home: undefined;
  Detalhes: { loja: Loja };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Detalhes'>;

export default function LojaCard({ loja }: Props) {
  const navigation = useNavigation<NavigationProp>(); 
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