import { TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {customTextInput} from './CustomTextInput.style';

const CustomTextInput = (props: TextInputProps) => {
  return <TextInput style={[customTextInput.input, props.style]} {...props} />;
};

export {CustomTextInput};
