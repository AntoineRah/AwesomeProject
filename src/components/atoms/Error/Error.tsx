import {Text} from 'react-native';
import React from 'react';
import {ErrorProps} from './Error.type';
import {errorStyles} from './Error.style';

const Error = ({message}: ErrorProps) => {
  return <Text style={errorStyles.message}>{message}</Text>;
};

export {Error};
