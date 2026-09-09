export interface WfWorkflowDefinitionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfWorkflowDefinitionFormValidator {
  public static validateForm(form: WfWorkflowDefinitionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
