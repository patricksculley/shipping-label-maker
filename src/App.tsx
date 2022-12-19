import React from "react";
import "./App.css";
import WizardContextProvider from "./core/components/wizard/WizardContextProvider";
import ShippingLabelMaker from "./features/shipping-label-maker/ShippingLabelMaker";

function App() {
  return (
    <div className="App">
      <WizardContextProvider>
        <ShippingLabelMaker />
      </WizardContextProvider>
    </div>
  );
}

export default App;
