export interface AiToolDefinitionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiToolDefinitionFormValidator {
  public static validateForm(form: AiToolDefinitionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
