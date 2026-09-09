export interface PrjSubtaskFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjSubtaskFormValidator {
  public static validateForm(form: PrjSubtaskFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
