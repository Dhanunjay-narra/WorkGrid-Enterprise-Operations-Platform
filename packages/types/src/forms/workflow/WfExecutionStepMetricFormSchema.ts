export interface WfExecutionStepMetricFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfExecutionStepMetricFormValidator {
  public static validateForm(form: WfExecutionStepMetricFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
