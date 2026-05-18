import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Loja } from '../@types/loja';

// Criamos um tipo para o formulário que omite o ID
type FormData = Omit<Loja, 'id'>;

export function useCadastroLoja() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    categoria: '',
    imagem: '',
    distancia: '',
    descricao: '',
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSalvar = () => {
    if (!formData.nome || !formData.categoria || !formData.distancia) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios (*)');
      return;
    }

    // Simulação de salvamento
    console.log('Enviando para o servidor:', formData);
    
    Alert.alert('Sucesso', 'Local cadastrado com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return { formData, updateField, handleSalvar };
}