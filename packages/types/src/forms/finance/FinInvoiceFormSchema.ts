export interface FinInvoiceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinInvoiceFormValidator {
  public static validateForm(form: FinInvoiceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
