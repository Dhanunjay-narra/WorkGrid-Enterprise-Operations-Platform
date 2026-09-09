export interface AiModelRoutingRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiModelRoutingRuleFormValidator {
  public static validateForm(form: AiModelRoutingRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
