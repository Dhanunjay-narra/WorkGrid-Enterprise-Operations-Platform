export interface SupTicketMessageFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupTicketMessageFormValidator {
  public static validateForm(form: SupTicketMessageFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
