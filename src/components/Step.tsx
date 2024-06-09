import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ComponentType, FC, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Button } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface StepProps {
  incrementStep: () => void;
}

type StepsContainerProps = {
  steps: Array<ComponentType<StepProps>>;
};

export const Step: FC<StepsContainerProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const incrementStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const decrementStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgress = () => {
    return (currentStep + 1) / totalSteps;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Progress.Bar
          progress={getProgress()}
          width={200}
          color='#EA4335'
          unfilledColor='#d3d3d3'
          borderWidth={0}
          borderRadius={10}
        />
      </View>
      <Button
        onPress={decrementStep}
        style={styles.button}
        icon={() => (
          <FontAwesome6 name='arrow-left' size={24} color='#EA4335' />
        )}
        rippleColor='transparent'
        underlayColor='transparent'
      ></Button>
      <View>{steps[currentStep]({ incrementStep })}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'relative',
    top: -18,
    right: 150,
  },
});
