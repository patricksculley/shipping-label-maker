import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useCallback, useContext, useMemo, useState } from "react";
import GetReceiverAddress from "./GetReceiverAddress";
import GetSenderAddress from "./GetSenderAddress";
import { WizardContextContext } from "./WizardContextProvider";
import { WizardAction, WizardContext, WizardStep } from "./WizardTypes";

export interface WizardProps {
  header: string;
  steps?: WizardStepProps;
  wizardContext: WizardContext;
  onComplete: () => void;
}

export interface WizardStepProps {
  wizardContext: WizardContext;
  onAction: (wizardAction: WizardAction, wizardContext: WizardContext) => void;
}

const Wizard: React.FC<WizardProps> = ({}) => {
  const [wizardContext, setWizardContext] =  useContext(WizardContextContext);

  const [currentStep, setCurrentStep] = useState<WizardStep>(
    WizardStep.GetSenderAddress
  );

  const updateCurrentStep = useCallback(
    (wizardAction: WizardAction, wizardContext: WizardContext) => {
      setCurrentStep(
        currentStep + (wizardAction === WizardAction.Next ? 1 : -1)
      );
      setWizardContext(wizardContext);
    },
    [currentStep]
  );

  const WizardStepComponent = useMemo(() => {
    switch (currentStep) {
      case WizardStep.GetSenderAddress:
        return (
          <GetSenderAddress
            wizardContext={wizardContext}
            onAction={updateCurrentStep}
          />
        );
      case WizardStep.GetReceiverAddress:
        return (
          <GetReceiverAddress
            wizardContext={wizardContext}
            onAction={updateCurrentStep}
          />
        );
    }
  }, [currentStep, JSON.stringify(wizardContext), updateCurrentStep]);

  return (
    <>
      <Stepper activeStep={currentStep}>
        {Object.keys(WizardStep)
          .filter((key) => !isNaN(key as any))
          .map((stepIndex) => {
            return (
              <Step key={stepIndex}>
                <StepLabel>{getStepTitle(parseInt(stepIndex))}</StepLabel>
              </Step>
            );
          })}
      </Stepper>
      {WizardStepComponent}
    </>
  );
};

const getStepTitle = (wizardStep: WizardStep): string => {
  switch (wizardStep) {
    case WizardStep.GetSenderAddress:
      return "Sender's address";
    case WizardStep.GetReceiverAddress:
      return "Receiver's address";
    case WizardStep.GetWeight:
      return "Weight";
    default:
      return "";
  }
};

export default Wizard;
