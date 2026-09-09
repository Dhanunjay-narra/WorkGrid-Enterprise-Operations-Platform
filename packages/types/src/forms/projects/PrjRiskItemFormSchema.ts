export interface PrjRiskItemFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjRiskItemFormValidator {
  public static validateForm(form: PrjRiskItemFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
