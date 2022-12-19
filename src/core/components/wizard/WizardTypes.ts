export interface WizardContext {
  from: {
    name?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  to: {
    name?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  weight?: bigint;
  shippingOption?: bigint;
}

export class WizardContextImpl implements WizardContext {
  from = {};
  to = {};
}

export enum WizardAction {
  Prev = 1,
  Next = 2,
  End = 3,
}

export enum WizardStep {
  GetSenderAddress = 0,
  GetReceiverAddress = 1,
  GetWeight = 2,
}
