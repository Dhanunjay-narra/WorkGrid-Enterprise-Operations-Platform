export interface DocMetadataTagFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocMetadataTagFormValidator {
  public static validateForm(form: DocMetadataTagFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
