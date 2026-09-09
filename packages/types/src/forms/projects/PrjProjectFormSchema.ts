export interface PrjProjectFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjProjectFormValidator {
  public static validateForm(form: PrjProjectFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
