export interface InvWarehouseZoneFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvWarehouseZoneFormValidator {
  public static validateForm(form: InvWarehouseZoneFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
