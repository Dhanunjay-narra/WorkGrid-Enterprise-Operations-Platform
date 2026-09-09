export interface IntAuthTokenPairFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntAuthTokenPairFormValidator {
  public static validateForm(form: IntAuthTokenPairFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
