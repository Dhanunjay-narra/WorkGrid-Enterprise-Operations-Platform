export interface CrmLeadFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmLeadFormValidator {
  public static validateForm(form: CrmLeadFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
