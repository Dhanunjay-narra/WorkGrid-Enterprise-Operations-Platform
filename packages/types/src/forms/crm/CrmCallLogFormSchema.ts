export interface CrmCallLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmCallLogFormValidator {
  public static validateForm(form: CrmCallLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
