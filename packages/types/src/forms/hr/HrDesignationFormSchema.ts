export interface HrDesignationFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrDesignationFormValidator {
  public static validateForm(form: HrDesignationFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
