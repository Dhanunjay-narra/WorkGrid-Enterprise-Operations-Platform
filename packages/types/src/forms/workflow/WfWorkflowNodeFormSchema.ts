export interface WfWorkflowNodeFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfWorkflowNodeFormValidator {
  public static validateForm(form: WfWorkflowNodeFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
