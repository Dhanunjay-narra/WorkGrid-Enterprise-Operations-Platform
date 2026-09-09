export interface EvtAckReceiptFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtAckReceiptFormValidator {
  public static validateForm(form: EvtAckReceiptFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
