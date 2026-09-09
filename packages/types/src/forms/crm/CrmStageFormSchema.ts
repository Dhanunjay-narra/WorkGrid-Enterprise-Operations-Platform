export interface CrmStageFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmStageFormValidator {
  public static validateForm(form: CrmStageFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
