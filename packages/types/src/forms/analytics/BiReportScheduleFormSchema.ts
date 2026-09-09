export interface BiReportScheduleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiReportScheduleFormValidator {
  public static validateForm(form: BiReportScheduleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
