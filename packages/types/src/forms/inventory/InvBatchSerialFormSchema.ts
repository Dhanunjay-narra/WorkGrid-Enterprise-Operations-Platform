export interface InvBatchSerialFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvBatchSerialFormValidator {
  public static validateForm(form: InvBatchSerialFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
