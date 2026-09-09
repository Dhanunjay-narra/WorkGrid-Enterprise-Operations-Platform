export interface CrmActivityFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmActivityFormValidator {
  public static validateForm(form: CrmActivityFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
