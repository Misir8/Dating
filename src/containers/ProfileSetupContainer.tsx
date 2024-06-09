import { Step } from '../components/organisms/Step';
import { NamesSetup } from '../components/organisms/NamesSetup';
import { AgeSetup } from '../components/organisms/AgeSetup';

type ProfileData = { firstName: string; lastName: string };

export const ProfileSetupContainer = () => {
  const onDataHandle = (values: ProfileData) => {
    console.log('values ProfileSetupContainer', values);
  };
  return <Step setData={onDataHandle} steps={[NamesSetup, AgeSetup]} />;
};
