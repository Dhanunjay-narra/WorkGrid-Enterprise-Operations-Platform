export interface FinGeneralLedgerFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinGeneralLedgerFormValidator {
  public static validateForm(form: FinGeneralLedgerFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
