export interface AiAgentConversationSessionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiAgentConversationSessionFormValidator {
  public static validateForm(form: AiAgentConversationSessionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
