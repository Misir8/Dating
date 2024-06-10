import React from 'react';
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';

export const AgeSetup = () => {
  const generateAges = () => {
    let ages = [];
    for (let i = 18; i <= 100; i++) {
      ages.push(i);
    }
    return ages;
  };

  return (
    <View>
      <Text>How Old Are You</Text>
      <Text>Please provide your age in years</Text>
      <Formik initialValues={{ age: 18 }} onSubmit={() => {}}>
        {({ handleSubmit, values, handleChange, setFieldValue }) => (
          <View>
            <Picker
              style={{ width: 100 }}
              selectedValue={values.age}
              onValueChange={itemValue => setFieldValue('age', itemValue)}
            >
              {generateAges().map(age => (
                <Picker.Item key={age} label={age.toString()} value={age} />
              ))}
            </Picker>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AgeSetup;
