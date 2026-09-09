export interface FinRecurringPlanFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinRecurringPlanFormValidator {
  public static validateForm(form: FinRecurringPlanFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
