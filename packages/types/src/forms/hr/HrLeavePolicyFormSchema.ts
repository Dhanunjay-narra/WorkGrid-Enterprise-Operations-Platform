export interface HrLeavePolicyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrLeavePolicyFormValidator {
  public static validateForm(form: HrLeavePolicyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
