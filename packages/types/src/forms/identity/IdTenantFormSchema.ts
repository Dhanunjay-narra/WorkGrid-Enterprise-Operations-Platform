export interface IdTenantFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdTenantFormValidator {
  public static validateForm(form: IdTenantFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
