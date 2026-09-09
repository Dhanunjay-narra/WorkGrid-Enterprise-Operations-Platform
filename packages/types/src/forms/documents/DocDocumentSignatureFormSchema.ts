export interface DocDocumentSignatureFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocDocumentSignatureFormValidator {
  public static validateForm(form: DocDocumentSignatureFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
