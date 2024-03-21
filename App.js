// import React from 'react';
// import MainScreen from './screen/MainScreen';

// export default function App() {
//   return <MainScreen />;
// }
import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
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
    <View>
      
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <TextInput
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
        value={cpf}
      />
      <TextInput
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        value={telefone}
      />
      <TextInput
        placeholder="Data de Nascimento"
        onChangeText={(text) => setDataNascimento(text)}
        value={dataNascimento}
      />

     
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
