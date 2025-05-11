import {Text} from 'react-native';
import React from 'react';
import {ErrorProps} from './Error.type';
import {errorStyles} from './Error.style';
import { fonts } from '../../../globalSyles/fontTheme';

const Error = ({message}: ErrorProps) => {
  return <Text style={[errorStyles.message,fonts.heading]}>{message}</Text>;
};

export {Error};
