export interface SupTicketFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupTicketFormValidator {
  public static validateForm(form: SupTicketFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
