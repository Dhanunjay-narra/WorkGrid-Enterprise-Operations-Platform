export interface FinBankReconciliationFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinBankReconciliationFormValidator {
  public static validateForm(form: FinBankReconciliationFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
