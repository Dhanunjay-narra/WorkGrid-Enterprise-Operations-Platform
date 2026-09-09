export interface PrjWorkspaceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjWorkspaceFormValidator {
  public static validateForm(form: PrjWorkspaceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
