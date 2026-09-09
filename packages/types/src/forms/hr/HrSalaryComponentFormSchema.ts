export interface HrSalaryComponentFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrSalaryComponentFormValidator {
  public static validateForm(form: HrSalaryComponentFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
