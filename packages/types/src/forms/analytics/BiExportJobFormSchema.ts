export interface BiExportJobFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiExportJobFormValidator {
  public static validateForm(form: BiExportJobFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
