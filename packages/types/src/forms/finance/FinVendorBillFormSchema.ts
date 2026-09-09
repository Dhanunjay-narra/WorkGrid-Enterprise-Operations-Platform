export interface FinVendorBillFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinVendorBillFormValidator {
  public static validateForm(form: FinVendorBillFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
