export interface BiAggregatedDailyMetricFormData {
  code: string;
  name: string;
  notes?: string;
}

export class BiAggregatedDailyMetricFormValidator {
  public static validateForm(form: BiAggregatedDailyMetricFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
