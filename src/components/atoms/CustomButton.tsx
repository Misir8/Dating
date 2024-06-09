import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { FC } from 'react';

type CustomButtonProps = {
  onPress: () => void;
  label: string;
};

export const CustomButton: FC<CustomButtonProps> = ({ onPress, label }) => {
  return (
    <Button
      style={styles.submitBtn}
      labelStyle={{ color: 'white' }}
      mode={'contained'}
      contentStyle={{ height: 60, width: 300 }}
      onPress={onPress}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#FF5069',
    marginTop: 20,
    borderRadius: 50,
  },
});
