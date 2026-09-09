export interface DocChunkIndexFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocChunkIndexFormValidator {
  public static validateForm(form: DocChunkIndexFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
