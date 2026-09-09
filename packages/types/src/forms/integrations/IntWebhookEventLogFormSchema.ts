export interface IntWebhookEventLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntWebhookEventLogFormValidator {
  public static validateForm(form: IntWebhookEventLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
