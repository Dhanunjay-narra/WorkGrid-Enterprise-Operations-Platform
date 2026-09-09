export interface IdDirectorySyncFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdDirectorySyncFormValidator {
  public static validateForm(form: IdDirectorySyncFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
