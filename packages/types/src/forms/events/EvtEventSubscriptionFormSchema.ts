export interface EvtEventSubscriptionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtEventSubscriptionFormValidator {
  public static validateForm(form: EvtEventSubscriptionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
