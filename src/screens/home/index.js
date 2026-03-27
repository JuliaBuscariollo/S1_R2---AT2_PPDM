import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={ require ('../../../assets/logotipo.png') }
        style={styles.logo}
      />

      <Text style={styles.title}>Aura Cosmetics</Text>

      <Text style={styles.description}>
        Bem-vindo à Aura Cosmetics! Uma loja de maquiagem com um serviço personalizado!
      </Text>

    
      <View style={styles.features}>
        <View style={styles.featureItem}>
          <FontAwesome name="truck" size={22} color="#c07cda" />
          <Text style={styles.featureText}>Entrega Rápida</Text>
        </View>

        <View style={styles.featureItem}>
          <FontAwesome name="credit-card" size={22} color="#c07cda" />
          <Text style={styles.featureText}>Pagamento Seguro</Text>
        </View>

        <View style={styles.featureItem}>
          <FontAwesome name="gift" size={22} color="#c07cda" />
          <Text style={styles.featureText}>Ofertas Especiais</Text>
        </View>
      </View>

     
      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('Produtos')}
      >
        <FontAwesome name="shopping-bag" size={18} color="#fff" />
        <Text style={styles.buttonText}> Ver Produtos</Text>
      </Pressable>

      
      <Pressable 
        style={styles.buttonOutline} 
        onPress={() => navigation.navigate('Contato')}
      >
        <FontAwesome name="phone" size={18} color="#c07cda" />
        <Text style={styles.buttonTextOutline}> Contato</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 220,
    height: 150,
    marginBottom: 20,
    borderRadius: 80
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#260034'
  },
  description: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 20,
    color: '#260034'
  },

  /* Destaques */
  features: {
    flexDirection: 'row',
    marginBottom: 25
  },
  featureItem: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  featureText: {
    fontSize: 12,
    color: '#260034',
    marginTop: 5
  },

  /* Botões */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c07cda',
    padding: 15,
    margin: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize:15,
    color: '#fff'
  },

  buttonOutline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#c07cda',
    padding: 15,
    margin: 10,
    borderRadius: 8
  },
  buttonTextOutline: {
    fontSize:15,
    color: '#c07cda'
  }
});