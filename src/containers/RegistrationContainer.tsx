import { Formik, FormikValues } from 'formik';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomTextInput } from '../components/atoms/CustomTextInput';

export const RegistrationContainer = () => {
  const { navigate } = useNavigation();
  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
    navigate('ProfileSetup' as never);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>
          <CustomTextInput
            placeholder={'Enter email'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <CustomTextInput
            secureTextEntry={true}
            placeholder={'Enter password'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <CustomButton label={'Continue'} onPress={() => handleSubmit()} />
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
