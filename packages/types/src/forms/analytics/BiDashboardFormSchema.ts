export interface BiDashboardFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiDashboardFormValidator {
  public static validateForm(form: BiDashboardFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
