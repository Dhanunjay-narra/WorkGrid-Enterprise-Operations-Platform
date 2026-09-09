export interface SecTamperLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SecTamperLogFormValidator {
  public static validateForm(form: SecTamperLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
