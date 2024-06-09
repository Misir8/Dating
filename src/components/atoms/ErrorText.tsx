import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

type ErrorTextProps = {
  message: string;
};

export const ErrorText: FC<ErrorTextProps> = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 14,
    color: 'red',
  },
});
