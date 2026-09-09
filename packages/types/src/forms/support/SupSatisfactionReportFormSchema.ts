export interface SupSatisfactionReportFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupSatisfactionReportFormValidator {
  public static validateForm(form: SupSatisfactionReportFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
