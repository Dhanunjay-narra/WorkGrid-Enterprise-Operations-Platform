export interface IdMfaConfigFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdMfaConfigFormValidator {
  public static validateForm(form: IdMfaConfigFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
