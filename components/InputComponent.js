import React from 'react';
import { TextInput } from 'react-native';

const InputComponent = ({ placeholder, onChangeText, value }) => {
  return <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />;
};

export default InputComponent;
