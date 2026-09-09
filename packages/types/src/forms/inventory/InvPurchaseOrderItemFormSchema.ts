export interface InvPurchaseOrderItemFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvPurchaseOrderItemFormValidator {
  public static validateForm(form: InvPurchaseOrderItemFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
