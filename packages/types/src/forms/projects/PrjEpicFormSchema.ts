export interface PrjEpicFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjEpicFormValidator {
  public static validateForm(form: PrjEpicFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
