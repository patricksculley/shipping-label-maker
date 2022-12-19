import React, { createContext, useContext, useState } from "react";
import { WizardContextImpl } from "./WizardTypes";

export const WizardContextContext = createContext();

const WizardContextProvider = ({ children }) => {
  const [wizardContext, setWizardContext] = useState(new WizardContextImpl());

  return (
    <WizardContextContext.Provider value={[wizardContext, setWizardContext]}>
      {children}
    </WizardContextContext.Provider>
  );
};

export default WizardContextProvider;
