export interface IdRoleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdRoleFormValidator {
  public static validateForm(form: IdRoleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
