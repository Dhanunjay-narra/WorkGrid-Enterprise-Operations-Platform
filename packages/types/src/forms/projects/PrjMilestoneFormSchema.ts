export interface PrjMilestoneFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjMilestoneFormValidator {
  public static validateForm(form: PrjMilestoneFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
