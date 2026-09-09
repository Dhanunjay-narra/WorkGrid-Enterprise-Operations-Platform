export interface IdPolicyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdPolicyFormValidator {
  public static validateForm(form: IdPolicyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
