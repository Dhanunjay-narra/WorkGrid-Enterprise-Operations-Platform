export interface DocDocumentVersionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocDocumentVersionFormValidator {
  public static validateForm(form: DocDocumentVersionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
