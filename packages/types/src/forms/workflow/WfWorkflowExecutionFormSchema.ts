export interface WfWorkflowExecutionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfWorkflowExecutionFormValidator {
  public static validateForm(form: WfWorkflowExecutionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
