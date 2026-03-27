import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Contato() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Contato</Text>

      <View style={styles.row}>
        <FontAwesome name="phone" size={20} color="#7700a3" />
        <Text style={styles.Text}> Telefone: (19) 99999-9999</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome name="whatsapp" size={20} color="#7700a3" />
        <Text style={styles.Text}> WhatsApp: (19) 98888-8888</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome name="map-marker" size={20} color="#7700a3" />
        <Text style={styles.Text}>  Endereço: Rua Exemplo, 00 - Bauru/SP</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome name="id-card" size={20} color="#7700a3" />
        <Text style={styles.Text}>  CNPJ: 07.795.406/0001-57</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#f0e1f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7700a3'
  },
  Text: {
    color: '#000000',
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  }
});