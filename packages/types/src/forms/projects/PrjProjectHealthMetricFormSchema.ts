export interface PrjProjectHealthMetricFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjProjectHealthMetricFormValidator {
  public static validateForm(form: PrjProjectHealthMetricFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
