import { StyleSheet, View, Dimensions } from 'react-native';
import { Formik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import { CustomTextInput } from '../atoms/CustomTextInput';
import { CustomButton } from '../atoms/CustomButton';
import { StepProps } from './Step';
import { ErrorText } from '../atoms/ErrorText';

const { height } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name Required'),
  lastname: Yup.string().required('Last Name Required'),
});

export const NamesSetup: FC<StepProps> = ({ setData, incrementStep }) => {
  return (
    <Formik
      initialValues={{ firstname: '', lastname: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers) => {
        setData!(values);
        incrementStep();
      }}
    >
      {formik => {
        return (
          <View style={styles.container}>
            <CustomTextInput
              value={formik.values.firstname}
              placeholder={'First Name'}
              onChangeText={formik.handleChange('firstname')}
              onBlur={formik.handleBlur('firstname')}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <ErrorText message={formik.errors.firstname} />
            ) : null}
            <CustomTextInput
              value={formik.values.lastname}
              placeholder={'Last Name'}
              onChangeText={formik.handleChange('lastname')}
              onBlur={formik.handleBlur('lastname')}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <ErrorText message={formik.errors.lastname} />
            ) : null}
            <CustomButton
              label={'Continue'}
              onPress={() => formik.handleSubmit()}
            />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 100,
  },
});
