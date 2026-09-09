export interface CrmAccountFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmAccountFormValidator {
  public static validateForm(form: CrmAccountFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
