export interface AiTokenUsageRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiTokenUsageRecordFormValidator {
  public static validateForm(form: AiTokenUsageRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
