export interface WfEventTriggerFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfEventTriggerFormValidator {
  public static validateForm(form: WfEventTriggerFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
