export interface IdAccessReviewFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IdAccessReviewFormValidator {
  public static validateForm(form: IdAccessReviewFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
