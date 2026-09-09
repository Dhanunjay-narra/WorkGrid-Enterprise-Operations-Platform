export interface DocFolderFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocFolderFormValidator {
  public static validateForm(form: DocFolderFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
