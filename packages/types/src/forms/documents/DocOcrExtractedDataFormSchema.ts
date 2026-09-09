export interface DocOcrExtractedDataFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocOcrExtractedDataFormValidator {
  public static validateForm(form: DocOcrExtractedDataFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
