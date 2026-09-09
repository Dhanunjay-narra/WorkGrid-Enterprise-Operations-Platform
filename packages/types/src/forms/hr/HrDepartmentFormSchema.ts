export interface HrDepartmentFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrDepartmentFormValidator {
  public static validateForm(form: HrDepartmentFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
