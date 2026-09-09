export interface EvtDeadLetterEventFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtDeadLetterEventFormValidator {
  public static validateForm(form: EvtDeadLetterEventFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
