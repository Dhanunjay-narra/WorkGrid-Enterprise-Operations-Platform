export interface IntOAuthConnectionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntOAuthConnectionFormValidator {
  public static validateForm(form: IntOAuthConnectionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
