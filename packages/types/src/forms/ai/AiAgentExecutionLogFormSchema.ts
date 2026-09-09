export interface AiAgentExecutionLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiAgentExecutionLogFormValidator {
  public static validateForm(form: AiAgentExecutionLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
