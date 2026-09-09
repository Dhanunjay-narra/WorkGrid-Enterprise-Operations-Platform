export interface InvStockReservationFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvStockReservationFormValidator {
  public static validateForm(form: InvStockReservationFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
