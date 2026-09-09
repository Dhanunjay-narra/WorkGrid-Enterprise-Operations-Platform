export interface FinRefundRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinRefundRecordFormValidator {
  public static validateForm(form: FinRefundRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
