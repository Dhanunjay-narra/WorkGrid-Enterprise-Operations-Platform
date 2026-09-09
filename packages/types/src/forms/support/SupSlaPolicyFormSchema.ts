export interface SupSlaPolicyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupSlaPolicyFormValidator {
  public static validateForm(form: SupSlaPolicyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
