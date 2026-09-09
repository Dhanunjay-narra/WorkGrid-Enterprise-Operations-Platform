export interface IntSyncHistoryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntSyncHistoryFormValidator {
  public static validateForm(form: IntSyncHistoryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
