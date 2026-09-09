export interface InvTransferOrderFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvTransferOrderFormValidator {
  public static validateForm(form: InvTransferOrderFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
