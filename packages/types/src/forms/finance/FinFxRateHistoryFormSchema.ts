export interface FinFxRateHistoryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinFxRateHistoryFormValidator {
  public static validateForm(form: FinFxRateHistoryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
