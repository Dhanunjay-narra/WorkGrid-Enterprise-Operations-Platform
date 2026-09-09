export interface CrmSalesQuotaFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmSalesQuotaFormValidator {
  public static validateForm(form: CrmSalesQuotaFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
