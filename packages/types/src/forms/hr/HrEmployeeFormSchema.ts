export interface HrEmployeeFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrEmployeeFormValidator {
  public static validateForm(form: HrEmployeeFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
