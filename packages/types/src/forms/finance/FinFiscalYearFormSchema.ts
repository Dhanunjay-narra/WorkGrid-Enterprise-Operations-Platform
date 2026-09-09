export interface FinFiscalYearFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinFiscalYearFormValidator {
  public static validateForm(form: FinFiscalYearFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
