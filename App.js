import React, { useState } from 'react';
import { View, Button, TextInput, Text,} from 'react-native';
import MainScreen from './screen/MainScreen';
import ModalComponent from './components/ModalComponent';


export default function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(false);

  const handleSubmit = () => {
    setDadosEnviados(true);
  };

  if (dadosEnviados) {
    return <MainScreen nome={nome} cpf={cpf} email={email} telefone={telefone} dataNascimento={dataNascimento} />;
  }

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}> Informe seu nome: </Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'blue', width: 200, marginBottom: 10}}
        keyboardType="default"
        value={nome}
        onChangeText={text => setNome(text)}
       />
      <Text style={{fontWeight: 'bold'}}> Informe seu CPF: </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'blue', width: 200, marginBottom: 10}}
        keyboardType="default"
        value={cpf}
        onChangeText={text => setCpf(text)}
      />
      <Text style={{fontWeight: 'bold'}}> Informe seu E-mail: </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'blue', width: 200, marginBottom: 10}}
        keyboardType="default"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{fontWeight: 'bold'}}> Informe seu telefone: </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'blue', width: 200, marginBottom: 10}}
        keyboardType="default"
        value={telefone}
        onChangeText={text => setTelefone(text)}
      />
      <Text style={{fontWeight: 'bold'}}>Informe sua data de nascimento:</Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'blue', width: 200, marginBottom: 10}}
        keyboardType="default"
        value={dataNascimento}
        onChangeText={text => setDataNascimento(text)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
