export interface IotAnomalyAlertFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotAnomalyAlertFormValidator {
  public static validateForm(form: IotAnomalyAlertFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
