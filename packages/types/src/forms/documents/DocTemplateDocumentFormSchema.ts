export interface DocTemplateDocumentFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocTemplateDocumentFormValidator {
  public static validateForm(form: DocTemplateDocumentFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
