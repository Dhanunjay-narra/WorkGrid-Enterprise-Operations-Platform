export interface HrTaxDeductionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrTaxDeductionFormValidator {
  public static validateForm(form: HrTaxDeductionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
