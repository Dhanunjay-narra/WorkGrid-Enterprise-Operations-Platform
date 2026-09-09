export interface IntAdapterTelemetryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntAdapterTelemetryFormValidator {
  public static validateForm(form: IntAdapterTelemetryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
