import React, { useContext ,useEffect} from 'react';
import { useAuthContext } from '../../../../Context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4  from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './step7';



const FormSteps = () => {
  const { step ,prevStep} = useAuthContext(); 
  useEffect(() => {
    const handlePopState = () => {
      prevStep();
    };
   window.addEventListener('popstate', handlePopState);
     return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [prevStep]);
  
 
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    default:
      return <Step1 />; 
  }
};

const MultiStepForm = () => {
  return (
  
      <GoogleOAuthProvider clientId="645804049810-4tpp2jsn2r9bek8d3uob13rj1kp93asb.apps.googleusercontent.com">
      <FormSteps />
      </GoogleOAuthProvider>
  );
};

export default MultiStepForm;
