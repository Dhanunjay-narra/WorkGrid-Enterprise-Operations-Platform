export interface PrjTaskFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjTaskFormValidator {
  public static validateForm(form: PrjTaskFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
