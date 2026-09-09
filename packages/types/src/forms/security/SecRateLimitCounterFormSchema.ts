export interface SecRateLimitCounterFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SecRateLimitCounterFormValidator {
  public static validateForm(form: SecRateLimitCounterFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
