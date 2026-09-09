export interface SupArticleCategoryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupArticleCategoryFormValidator {
  public static validateForm(form: SupArticleCategoryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
