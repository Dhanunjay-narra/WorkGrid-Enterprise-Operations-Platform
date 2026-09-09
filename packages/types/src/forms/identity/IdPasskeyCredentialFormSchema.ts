export interface IdPasskeyCredentialFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdPasskeyCredentialFormValidator {
  public static validateForm(form: IdPasskeyCredentialFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
