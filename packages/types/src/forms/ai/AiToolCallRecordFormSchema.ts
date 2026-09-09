export interface AiToolCallRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiToolCallRecordFormValidator {
  public static validateForm(form: AiToolCallRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
