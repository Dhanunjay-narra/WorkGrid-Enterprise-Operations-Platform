export interface SupCsatScoreFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupCsatScoreFormValidator {
  public static validateForm(form: SupCsatScoreFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
