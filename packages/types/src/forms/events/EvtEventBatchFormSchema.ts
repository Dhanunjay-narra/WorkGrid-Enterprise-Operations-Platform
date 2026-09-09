export interface EvtEventBatchFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtEventBatchFormValidator {
  public static validateForm(form: EvtEventBatchFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
