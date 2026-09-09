export interface CrmEmailSequenceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmEmailSequenceFormValidator {
  public static validateForm(form: CrmEmailSequenceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
