export interface AiModelFallbackLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiModelFallbackLogFormValidator {
  public static validateForm(form: AiModelFallbackLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
