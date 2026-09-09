export interface EvtPublishMetricFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtPublishMetricFormValidator {
  public static validateForm(form: EvtPublishMetricFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
