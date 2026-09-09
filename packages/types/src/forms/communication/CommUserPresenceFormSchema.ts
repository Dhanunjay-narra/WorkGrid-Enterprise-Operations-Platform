export interface CommUserPresenceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommUserPresenceFormValidator {
  public static validateForm(form: CommUserPresenceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
