export interface InvSupplierScorecardFormData {
  code: string;
  name: string;
  notes?: string;
}

export class InvSupplierScorecardFormValidator {
  public static validateForm(form: InvSupplierScorecardFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
