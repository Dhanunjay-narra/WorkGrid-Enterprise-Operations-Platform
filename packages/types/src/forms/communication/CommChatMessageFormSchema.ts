export interface CommChatMessageFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommChatMessageFormValidator {
  public static validateForm(form: CommChatMessageFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
