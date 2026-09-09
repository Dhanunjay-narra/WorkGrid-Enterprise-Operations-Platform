export interface HrJobPostingFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrJobPostingFormValidator {
  public static validateForm(form: HrJobPostingFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
