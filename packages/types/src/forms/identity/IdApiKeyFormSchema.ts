export interface IdApiKeyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdApiKeyFormValidator {
  public static validateForm(form: IdApiKeyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
