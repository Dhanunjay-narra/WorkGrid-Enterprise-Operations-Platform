export interface PrjSprintRetrospectiveFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjSprintRetrospectiveFormValidator {
  public static validateForm(form: PrjSprintRetrospectiveFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
