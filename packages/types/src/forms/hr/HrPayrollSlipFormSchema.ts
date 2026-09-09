export interface HrPayrollSlipFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrPayrollSlipFormValidator {
  public static validateForm(form: HrPayrollSlipFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
