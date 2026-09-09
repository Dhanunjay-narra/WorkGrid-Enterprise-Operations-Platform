export interface PrjBudgetLineFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjBudgetLineFormValidator {
  public static validateForm(form: PrjBudgetLineFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
