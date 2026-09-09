export interface DocDocumentPermissionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocDocumentPermissionFormValidator {
  public static validateForm(form: DocDocumentPermissionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
