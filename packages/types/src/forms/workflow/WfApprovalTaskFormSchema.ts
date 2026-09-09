export interface WfApprovalTaskFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfApprovalTaskFormValidator {
  public static validateForm(form: WfApprovalTaskFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
