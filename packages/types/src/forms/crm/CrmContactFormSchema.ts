export interface CrmContactFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmContactFormValidator {
  public static validateForm(form: CrmContactFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
