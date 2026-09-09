export interface CrmLeadScoreFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmLeadScoreFormValidator {
  public static validateForm(form: CrmLeadScoreFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
