import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import InputComponent from '../components/InputComponent';
import ModalComponent from '../components/ModalComponent';

const MainScreen = () => {

  const [modal, setModal] = useState(false);
  const [resultado, setResultado] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [numParcelas, setNumParcelas] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorEntrada, setValorEntrada] = useState('');



  const calcularCoeficienteFinanciamento = () => {
    const i = parseFloat(taxaJuros) / 100;
    const n = parseFloat(numParcelas);
    const CF = i / (1 - 1 / Math.pow(1 + i, n));
    return CF;
  };

  const calcularCenario1 = () => {
    const CF = calcularCoeficienteFinanciamento();
    const PV = parseFloat(valorCompra);
    const n = parseFloat(numParcelas);
    const PMT = PV * CF;
    const totalPagar = PMT * n;

    setResultado(`Cenário 1: Valor da Parcela (PMT) = R$ ${PMT.toFixed(2)}, Total a Pagar = R$ ${totalPagar.toFixed(2)}`);
    setModal(true);
  };

  const calcularCenario2 = () => {
    const CF = calcularCoeficienteFinanciamento();
    const PV = parseFloat(valorCompra);
    const VE = parseFloat(valorEntrada);
    const n = parseFloat(numParcelas);
    const PMT = PV * CF;
    const totalPagar = VE + (PMT * n);

    setResultado(`Cenário 2: Valor da Parcela (PMT) = R$ ${PMT.toFixed(2)}, Total a Pagar = R$ ${totalPagar.toFixed(2)}`);
    setModal(true);
  };

  const calcularCenario3 = () => {
    const i = parseFloat(taxaJuros) / 100;
    const n = parseFloat(numParcelas);
    const CF = i / (1 - 1 / Math.pow(1 + i, n));
    const PV = parseFloat(valorCompra);
    const PMT = PV * CF / (1 + CF);
    const totalPagar = parseFloat(valorEntrada) + (PMT * n);
  
    setResultado(`Cenário 3: Valor da Parcela = R$ ${PMT.toFixed(2)}, Total a Pagar = R$ ${totalPagar.toFixed(2)}`);
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  return (
    <View>
      <Text>Insira os dados:</Text>
      <InputComponent
        placeholder="Taxa de Juros (%)"
        onChangeText={(text) => setTaxaJuros(text)}
        value={taxaJuros}
        keyboardType="numeric"
      />
      <InputComponent
        placeholder="Número de Parcelas"
        onChangeText={(text) => setNumParcelas(text)}
        value={numParcelas}
        keyboardType="numeric"
      />
      <InputComponent
        placeholder="Valor da Compra"
        onChangeText={(text) => setValorCompra(text)}
        value={valorCompra}
        keyboardType="numeric"
      />
      <InputComponent
        placeholder="Valor de Entrada"
        onChangeText={(text) => setValorEntrada(text)}
        value={valorEntrada}
        keyboardType="numeric"
      />
      <Button title="Calcular Cenário 1" onPress={calcularCenario1} />
      <Button title="Calcular Cenário 2" onPress={calcularCenario2} />
      <Button title="Calcular Cenário 3" onPress={calcularCenario3} />
      <ModalComponent visible={modal} onDismiss={fecharModal} resultado={resultado} />
    </View>
  );
};

export default MainScreen;
