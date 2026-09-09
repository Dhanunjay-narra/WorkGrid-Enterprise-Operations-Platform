export interface FinCashFlowItemFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinCashFlowItemFormValidator {
  public static validateForm(form: FinCashFlowItemFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
