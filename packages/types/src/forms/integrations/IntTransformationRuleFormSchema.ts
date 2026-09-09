export interface IntTransformationRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntTransformationRuleFormValidator {
  public static validateForm(form: IntTransformationRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
