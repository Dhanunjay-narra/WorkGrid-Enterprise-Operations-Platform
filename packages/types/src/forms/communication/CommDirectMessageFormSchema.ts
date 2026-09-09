export interface CommDirectMessageFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommDirectMessageFormValidator {
  public static validateForm(form: CommDirectMessageFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
