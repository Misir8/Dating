import { Text } from 'react-native';
import { Step } from '../components/Step';

const Step1 = ({ incrementStep }) => (
  <Text onPress={incrementStep}>Step 1 Content</Text>
);
const Step2 = ({ incrementStep }) => (
  <Text onPress={incrementStep}>Step 2 Content</Text>
);
const Step3 = ({ incrementStep }) => (
  <Text onPress={incrementStep}>Step 3 Content</Text>
);
const Step4 = ({ incrementStep }) => (
  <Text onPress={incrementStep}>Step 4 Content</Text>
);
const Step5 = ({ incrementStep }) => (
  <Text onPress={incrementStep}>Step 5 Content</Text>
);

export const ProfileSetupScreen = () => {
  return <Step steps={[Step1, Step2, Step3, Step4, Step5]} />;
};
