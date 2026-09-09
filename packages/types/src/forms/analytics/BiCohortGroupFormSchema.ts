export interface BiCohortGroupFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiCohortGroupFormValidator {
  public static validateForm(form: BiCohortGroupFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
