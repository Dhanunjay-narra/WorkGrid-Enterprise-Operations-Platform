export interface SecPiiMaskingRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SecPiiMaskingRuleFormValidator {
  public static validateForm(form: SecPiiMaskingRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
