export interface FinLedgerAccountFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinLedgerAccountFormValidator {
  public static validateForm(form: FinLedgerAccountFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
