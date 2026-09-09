export interface HrOnboardingChecklistFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrOnboardingChecklistFormValidator {
  public static validateForm(form: HrOnboardingChecklistFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
