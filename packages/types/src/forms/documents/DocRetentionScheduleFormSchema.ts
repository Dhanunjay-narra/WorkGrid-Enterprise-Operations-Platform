export interface DocRetentionScheduleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class DocRetentionScheduleFormValidator {
  public static validateForm(form: DocRetentionScheduleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
