export interface InvSupplierFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvSupplierFormValidator {
  public static validateForm(form: InvSupplierFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
