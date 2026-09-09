export interface WfWorkflowVersionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfWorkflowVersionFormValidator {
  public static validateForm(form: WfWorkflowVersionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
