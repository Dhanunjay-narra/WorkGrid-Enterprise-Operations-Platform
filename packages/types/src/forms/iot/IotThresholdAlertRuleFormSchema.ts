export interface IotThresholdAlertRuleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotThresholdAlertRuleFormValidator {
  public static validateForm(form: IotThresholdAlertRuleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
