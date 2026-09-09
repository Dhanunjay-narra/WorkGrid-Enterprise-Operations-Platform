export interface FinJournalEntryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinJournalEntryFormValidator {
  public static validateForm(form: FinJournalEntryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
