export interface CommDigestQueueFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommDigestQueueFormValidator {
  public static validateForm(form: CommDigestQueueFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
