export interface CommTypingStateFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommTypingStateFormValidator {
  public static validateForm(form: CommTypingStateFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
