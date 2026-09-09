export interface PrjIssueReportFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjIssueReportFormValidator {
  public static validateForm(form: PrjIssueReportFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
