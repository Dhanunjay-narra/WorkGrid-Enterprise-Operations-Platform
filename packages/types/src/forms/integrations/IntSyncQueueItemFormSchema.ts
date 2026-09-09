export interface IntSyncQueueItemFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntSyncQueueItemFormValidator {
  public static validateForm(form: IntSyncQueueItemFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
