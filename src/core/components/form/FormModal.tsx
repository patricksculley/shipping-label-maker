import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Grid } from "@mui/material";

//Returns a tuple with [form, {formUpdateHandler(), toggleUpdateHandler(), updateHandler()}]
//[form, {formUpdateHandler, toggleUpdateHandler, updateHandler, setForm}]
export const useForm = (defaultValues = {}) => {
  const [form, setForm] = useState<any>(defaultValues);

  const updateHandler = (fieldName: string, value: string | number) => {
    form[fieldName] = value;
    setForm({ ...form, isUpdated: true });
  };

  const formUpdateHandler = (e: any) => {
    updateHandler(e.target.name, e.target.value);
  };

  const toggleUpdateHandler = (e: any) => {
    updateHandler(e.target.name, e.target.checked);
  };

  return [
    form,
    { updateHandler, formUpdateHandler, toggleUpdateHandler, setForm },
  ];
};

//returns a tuple with [isSubmitting, async formSubmitHandler(async submitMethod)]:
// [isSubmitting, formSubmitHandler]
export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formSubmitHandler = async (submitMethod: () => Promise<void>) => {
    setIsSubmitting(true);
    try {
      const result = await submitMethod();
      setIsSubmitting(false);
      return result;
    } catch (e) {
      setIsSubmitting(false);
      throw e;
    }
  };

  return [isSubmitting, formSubmitHandler];
};
export interface FormModalProps {
  open: boolean;
  onHide?: (e?: Event) => void;
  children?: React.ReactNode;
  title: string;
  hideOnBlur?: boolean;
}

const FormModal: React.FC<FormModalProps> = ({
  open = false,
  onHide = () => {},
  children,
  title,
  hideOnBlur = true,
}) => {
  return (
    <div>
      <Dialog
        style={{ zIndex: 10000 }}
        open={open}
        onClose={(e: Event, reason: string) => {
          if (onHide && (hideOnBlur || reason === "escapeKeyDown")) onHide();
        }}
        aria-labelledby="form-modal-title"
      >
        <div className="form-modal-content">
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <>
              <div>
                <h4>{title}</h4>
              </div>
            </>
          </DialogTitle>
          <DialogContent>
            {children}
            <Grid container justifyContent="center">
              <img
                style={{ height: 45 }}
                src="/ps-logo.svg"
                alt="logo"
                className="form-logo"
              />
            </Grid>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default FormModal;
