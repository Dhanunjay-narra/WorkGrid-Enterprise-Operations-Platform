export interface InvReorderRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvReorderRuleFormValidator {
  public static validateForm(form: InvReorderRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
