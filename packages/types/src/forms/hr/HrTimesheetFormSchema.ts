export interface HrTimesheetFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrTimesheetFormValidator {
  public static validateForm(form: HrTimesheetFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
