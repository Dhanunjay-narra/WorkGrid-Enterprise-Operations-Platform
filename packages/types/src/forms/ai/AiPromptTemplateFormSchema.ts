export interface AiPromptTemplateFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiPromptTemplateFormValidator {
  public static validateForm(form: AiPromptTemplateFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
