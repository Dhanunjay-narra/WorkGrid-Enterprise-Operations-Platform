export interface InvStockLevelFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvStockLevelFormValidator {
  public static validateForm(form: InvStockLevelFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
