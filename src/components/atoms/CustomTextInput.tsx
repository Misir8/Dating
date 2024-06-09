import { TextInput } from 'react-native-paper';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

type CustomTextInputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  secureTextEntry?: boolean;
};

export const CustomTextInput: FC<CustomTextInputProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
}) => {
  return (
    <TextInput
      theme={{
        roundness: 50,
        colors: { primary: '#FF5069' },
      }}
      underlineColor={'red'}
      outlineColor={'pink'}
      secureTextEntry={secureTextEntry}
      mode={'outlined'}
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    marginTop: 10,
    backgroundColor: 'white',
  },
});
