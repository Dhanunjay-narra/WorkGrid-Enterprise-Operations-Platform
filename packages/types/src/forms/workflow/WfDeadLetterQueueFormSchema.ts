export interface WfDeadLetterQueueFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfDeadLetterQueueFormValidator {
  public static validateForm(form: WfDeadLetterQueueFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
