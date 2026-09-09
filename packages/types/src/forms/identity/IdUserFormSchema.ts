export interface IdUserFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdUserFormValidator {
  public static validateForm(form: IdUserFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
