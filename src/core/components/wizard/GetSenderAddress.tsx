import { Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../form/FormModal";
import { WizardStepProps } from "./Wizard";
import WizardStepFooter from "./WizardStepFooter";
import { WizardStep } from "./WizardTypes";

const GetSenderAddress: React.FC<WizardStepProps> = ({
  wizardContext,
  onAction,
}) => {
  const [form, { formUpdateHandler }] = useForm({ ...wizardContext.from });

  return (
    <Grid container>
      <Grid item>
        <TextField
          margin="normal"
          fullWidth={true}
          name="name"
          onChange={formUpdateHandler}
          value={form.name}
          label="Name"
          variant="standard" 
        />
        <TextField
          margin="normal"
          fullWidth={true}
          name="street"
          onChange={formUpdateHandler}
          value={form.street}
          label="Street"
          variant="standard" 
        />
        <TextField
          margin="normal"
          fullWidth={true}
          name="city"
          onChange={formUpdateHandler}
          value={form.city}
          label="City"
          variant="standard" 
        />
        <TextField
          margin="normal"
          fullWidth={true}
          name="state"
          onChange={formUpdateHandler}
          value={form.state}
          label="State"
          variant="standard" 
        />
        <TextField
          margin="normal"
          fullWidth={true}
          name="zip"
          onChange={formUpdateHandler}
          value={form.zip}
          label="Zip"
          variant="standard" 
        />
        <WizardStepFooter
          currentStep={WizardStep.GetSenderAddress}
          onAction={(wizardAction) =>
            onAction(wizardAction, { ...wizardContext, from: form })
          }
        />
      </Grid>
    </Grid>
  );
};

export default GetSenderAddress;
