import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  ScrollView
} from 'react-native';
import InputSpinner from "react-native-input-spinner";

export default function Produtos() {

  const produtos = [
    {
      id: 1,
      nome: 'Blush Ruby Rose',
      preco: 29.90,
      pix: 24.90,
      img: 'https://i.pinimg.com/736x/7b/46/b1/7b46b11305e311381e6985ec5cf8046f.jpg'
    },
    {
      id: 2,
      nome: 'Delineador',
      preco: 21.90,
      pix: 17.90,
      img: 'https://i.pinimg.com/736x/36/24/66/362466da4cc8d8425d977ed2be03c1d8.jpg'
    },
    {
      id: 3,
      nome: 'Corretivo Liquido',
      preco: 79.90,
      pix: 69.90,
      img: 'https://i.pinimg.com/736x/c3/e9/fc/c3e9fc9eee6cabe8d8e28598f9205824.jpg'
    },
    {
      id: 4,
      nome: 'Contorno Facial',
      preco: 39.90,
      pix: 29.90,
      img: 'https://i.pinimg.com/736x/a7/bd/5b/a7bd5bf5e8160f759372a12fd2df4274.jpg'
    },
    {
      id: 5,
      nome: 'Iluminador',
      preco: 89.90,
      pix: 75.99,
      img: 'https://i.pinimg.com/736x/cb/7c/02/cb7c02180853e76fbbce866720d95cd0.jpg'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image
            source={{ uri: item.img }}
            style={styles.image}
          />

          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.preco}>
            Preço: R$ {item.preco.toFixed(2)}
          </Text>

          <Text style={styles.pix}>
            PIX: R$ {item.pix.toFixed(2)}
          </Text>

          <InputSpinner
            max={10}
            min={0}
            step={1}
            colorMax={"#694681"}
            colorMin={"#7700a3"}
          />

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </Pressable>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0e1f5',
    padding: 10
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  pix: {
    color: '#7057a6',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },

  button: {
    backgroundColor: '#7700a3',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});