import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const ModalComponent = ({ visible, onDismiss, resultado,nome }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Resultado do Financiamento:</Text>
        <Text>Olá</Text>
        <Text>{resultado}</Text>
        <Button title="Fechar" onPress={onDismiss} />
      </View>
    </Modal>
  );
};

export default ModalComponent;
