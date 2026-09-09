export interface DocAccessLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocAccessLogFormValidator {
  public static validateForm(form: DocAccessLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
