export interface WfRetryPolicyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfRetryPolicyFormValidator {
  public static validateForm(form: WfRetryPolicyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
