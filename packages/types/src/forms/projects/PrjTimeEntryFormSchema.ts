export interface PrjTimeEntryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjTimeEntryFormValidator {
  public static validateForm(form: PrjTimeEntryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
