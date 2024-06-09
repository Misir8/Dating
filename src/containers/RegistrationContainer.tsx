import { Formik, FormikValues } from 'formik';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const RegistrationContainer = () => {
  const { navigate } = useNavigation();
  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
    navigate('ProfileSetup');
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>
          <TextInput
            theme={{
              roundness: 50,
              colors: { primary: '#FF5069' },
            }}
            outlineColor={'pink'}
            mode={'outlined'}
            style={styles.textInput}
            placeholder={'Enter email'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextInput
            theme={{
              roundness: 50,
              colors: { primary: '#FF5069' },
            }}
            underlineColor={'red'}
            outlineColor={'pink'}
            secureTextEntry={true}
            mode={'outlined'}
            style={styles.textInput}
            placeholder={'Enter password'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button
            style={styles.submitBtn}
            labelStyle={{ color: 'white' }}
            mode={'contained'}
            contentStyle={{ height: 60, width: 300 }}
            onPress={() => handleSubmit()}
          >
            Continue
          </Button>
          <View style={{ marginTop: 40 }}>
            <Button
              style={styles.socialBtn}
              labelStyle={{ color: 'black' }}
              mode={'contained'}
              contentStyle={{
                height: 60,
                width: 300,
                display: 'flex',
                alignItems: 'center',
              }}
              onPress={() => handleSubmit()}
              icon={() => (
                <MaterialIcons color={'blue'} size={32} name='facebook' />
              )}
            >
              <Text style={{ textAlign: 'center', paddingRight: 80 }}>
                Login with Facebook
              </Text>
            </Button>
            <Button
              style={styles.socialBtn}
              labelStyle={{ color: 'black' }}
              mode={'contained'}
              contentStyle={{
                height: 60,
                width: 300,
                display: 'flex',
                alignItems: 'center',
              }}
              onPress={() => handleSubmit()}
              icon={() => (
                <AntDesign size={32} name='google' color={'#EA4335'} />
              )}
            >
              Login with Google
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    width: 300,
    marginTop: 10,
    backgroundColor: 'white',
  },
  submitBtn: {
    backgroundColor: '#FF5069',
    marginTop: 20,
    borderRadius: 50,
  },
  socialBtn: {
    backgroundColor: '#FFF',
    marginTop: 20,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputOutlineStyle: {},
});
