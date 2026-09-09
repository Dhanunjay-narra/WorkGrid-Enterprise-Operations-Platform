export interface FinExpenseReceiptFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinExpenseReceiptFormValidator {
  public static validateForm(form: FinExpenseReceiptFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
