export interface CrmOpportunitySplitFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CrmOpportunitySplitFormValidator {
  public static validateForm(form: CrmOpportunitySplitFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
