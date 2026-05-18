import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 20,
  },
  fab: {
    position: 'absolute', // Tira o botão do fluxo normal e permite flutuar
    right: 20,            // Distância da borda direita
    bottom: 30,           // Distância da borda inferior
    backgroundColor: '#27ae60',
    width: 60,
    height: 60,
    borderRadius: 30,     // Metade da largura/altura para ficar circular
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,         // Sombra no Android
    shadowColor: '#000',  // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;