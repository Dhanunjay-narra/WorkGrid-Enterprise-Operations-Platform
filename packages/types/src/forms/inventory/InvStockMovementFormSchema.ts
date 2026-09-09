export interface InvStockMovementFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvStockMovementFormValidator {
  public static validateForm(form: InvStockMovementFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
