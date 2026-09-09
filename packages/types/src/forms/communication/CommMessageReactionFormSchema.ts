export interface CommMessageReactionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommMessageReactionFormValidator {
  public static validateForm(form: CommMessageReactionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
