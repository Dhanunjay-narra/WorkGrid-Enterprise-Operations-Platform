export interface FinFinancialForecastFormData {
  code: string;
  name: string;
  notes?: string;
}

export class FinFinancialForecastFormValidator {
  public static validateForm(form: FinFinancialForecastFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
