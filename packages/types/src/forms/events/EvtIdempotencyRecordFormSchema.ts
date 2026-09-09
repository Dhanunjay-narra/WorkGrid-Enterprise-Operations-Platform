export interface EvtIdempotencyRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtIdempotencyRecordFormValidator {
  public static validateForm(form: EvtIdempotencyRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
