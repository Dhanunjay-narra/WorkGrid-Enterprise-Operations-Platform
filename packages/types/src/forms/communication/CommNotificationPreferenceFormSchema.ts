export interface CommNotificationPreferenceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommNotificationPreferenceFormValidator {
  public static validateForm(form: CommNotificationPreferenceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
