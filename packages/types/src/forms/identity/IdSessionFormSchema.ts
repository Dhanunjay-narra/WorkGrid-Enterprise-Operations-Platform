export interface IdSessionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdSessionFormValidator {
  public static validateForm(form: IdSessionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
