export interface InvStockAuditFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvStockAuditFormValidator {
  public static validateForm(form: InvStockAuditFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
