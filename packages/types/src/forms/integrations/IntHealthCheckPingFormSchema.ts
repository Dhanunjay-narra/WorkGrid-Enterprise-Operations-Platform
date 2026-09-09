export interface IntHealthCheckPingFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntHealthCheckPingFormValidator {
  public static validateForm(form: IntHealthCheckPingFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
