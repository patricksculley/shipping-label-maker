import React, { useContext, useState } from "react";
import FormModal from "../../core/components/form/FormModal";
import Wizard from "../../core/components/wizard/Wizard";
import { WizardContextContext } from "../../core/components/wizard/WizardContextProvider";

import ShippingLabel from "./ShippingLabel";

const ShippingLabelMaker = () => {

  const [wizardContext] = useContext(WizardContextContext);
  const [showLabel, setShowLabel] = useState<boolean>(false);

  return (
      <FormModal open={true} title="Shipping Label Maker">
        {showLabel ? (
          <ShippingLabel />
        ) : (
          <Wizard
            header=""
            wizardContext={wizardContext}
            onComplete={() => setShowLabel(true)}
          />
        )}
      </FormModal>
  );
};

export default ShippingLabelMaker;
