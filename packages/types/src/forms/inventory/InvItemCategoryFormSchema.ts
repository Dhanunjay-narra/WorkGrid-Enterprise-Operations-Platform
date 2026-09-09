export interface InvItemCategoryFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvItemCategoryFormValidator {
  public static validateForm(form: InvItemCategoryFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
