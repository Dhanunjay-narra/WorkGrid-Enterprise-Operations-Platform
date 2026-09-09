export interface CommMentionRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommMentionRecordFormValidator {
  public static validateForm(form: CommMentionRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
