export interface IdSecurityKeyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdSecurityKeyFormValidator {
  public static validateForm(form: IdSecurityKeyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
