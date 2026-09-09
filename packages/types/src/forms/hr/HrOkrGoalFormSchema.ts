export interface HrOkrGoalFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrOkrGoalFormValidator {
  public static validateForm(form: HrOkrGoalFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
