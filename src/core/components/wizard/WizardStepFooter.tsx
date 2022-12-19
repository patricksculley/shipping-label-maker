import { Button, Grid } from "@mui/material";
import React from "react";
import { WizardAction, WizardStep } from "./WizardTypes";

interface WizardStepFooterProps {
  onAction: (wizardAction: WizardAction) => void;
  currentStep: WizardStep;
}
const WizardStepFooter: React.FC<WizardStepFooterProps> = ({
  currentStep,
  onAction,
}) => {
  return (
    <Grid container justifyContent="space-between">
      {currentStep > WizardStep.GetSenderAddress ? (
        <Button
          variant="text"
          type="submit"
          color="primary"
          onClick={() => onAction(WizardAction.Prev)}
        >
          Previous
        </Button>
      ) : (
        <div />
      )}
      <Button
        variant="contained"
        type="submit"
        color="primary"
        onClick={() => onAction(WizardAction.Next)}
      >
        Next
      </Button>
    </Grid>
  );
};

export default WizardStepFooter;
