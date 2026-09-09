export interface BiDrilldownFilterFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiDrilldownFilterFormValidator {
  public static validateForm(form: BiDrilldownFilterFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
