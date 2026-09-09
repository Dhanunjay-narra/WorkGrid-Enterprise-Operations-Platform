export interface IntProviderRateLimitFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntProviderRateLimitFormValidator {
  public static validateForm(form: IntProviderRateLimitFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
