export interface SupEscalationRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupEscalationRuleFormValidator {
  public static validateForm(form: SupEscalationRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
