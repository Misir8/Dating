import { SafeAreaView, StyleSheet, View } from 'react-native';
import { FC, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Button } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export interface StepProps {
  incrementStep: () => void;
  setData?: (values: any) => void;
}

type StepsContainerProps = {
  steps: Array<FC<StepProps>>;
  setData?: (values: any) => void;
};

export const Step: FC<StepsContainerProps> = ({ steps, setData }) => {
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
      {currentStep !== 0 ? (
        <Button
          onPress={decrementStep}
          style={styles.button}
          icon={() => (
            <FontAwesome6 name='arrow-left' size={24} color='#EA4335' />
          )}
          rippleColor='transparent'
        >
          {''}
        </Button>
      ) : null}
      <View>{steps[currentStep]({ incrementStep, setData })}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    position: 'relative',
    top: -18,
    right: 150,
  },
});
