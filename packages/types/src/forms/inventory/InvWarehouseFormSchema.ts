export interface InvWarehouseFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvWarehouseFormValidator {
  public static validateForm(form: InvWarehouseFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
