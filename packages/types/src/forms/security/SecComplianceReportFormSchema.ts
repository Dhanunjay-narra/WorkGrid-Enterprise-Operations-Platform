export interface SecComplianceReportFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SecComplianceReportFormValidator {
  public static validateForm(form: SecComplianceReportFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
