export interface InvGoodsReceiptFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvGoodsReceiptFormValidator {
  public static validateForm(form: InvGoodsReceiptFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
