export interface AiDocumentChunkFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiDocumentChunkFormValidator {
  public static validateForm(form: AiDocumentChunkFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
