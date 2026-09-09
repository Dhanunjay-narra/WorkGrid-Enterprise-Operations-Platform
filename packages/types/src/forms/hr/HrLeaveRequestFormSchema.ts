export interface HrLeaveRequestFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrLeaveRequestFormValidator {
  public static validateForm(form: HrLeaveRequestFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
