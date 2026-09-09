export interface BiWidgetFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiWidgetFormValidator {
  public static validateForm(form: BiWidgetFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
