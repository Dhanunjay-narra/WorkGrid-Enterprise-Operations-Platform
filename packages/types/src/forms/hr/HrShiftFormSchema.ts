export interface HrShiftFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrShiftFormValidator {
  public static validateForm(form: HrShiftFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
