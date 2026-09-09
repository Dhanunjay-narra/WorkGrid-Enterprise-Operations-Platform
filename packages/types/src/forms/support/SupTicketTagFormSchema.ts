export interface SupTicketTagFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupTicketTagFormValidator {
  public static validateForm(form: SupTicketTagFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
