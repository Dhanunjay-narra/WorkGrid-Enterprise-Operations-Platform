export interface WfVariableStoreFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfVariableStoreFormValidator {
  public static validateForm(form: WfVariableStoreFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
