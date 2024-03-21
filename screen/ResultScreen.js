import React from 'react';
import { View, Text } from 'react-native';

const ResultScreen = ({ route }) => {
  const { resultado, nome } = route.params;

  return (
    <View>
      <Text>Olá, {nome}!</Text>
      <Text>Resultado do Financiamento:</Text>
      <Text>{resultado}</Text>
    </View>
  );
};

export default ResultScreen;
