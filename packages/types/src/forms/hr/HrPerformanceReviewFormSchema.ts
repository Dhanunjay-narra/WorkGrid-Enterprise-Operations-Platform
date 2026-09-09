export interface HrPerformanceReviewFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrPerformanceReviewFormValidator {
  public static validateForm(form: HrPerformanceReviewFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
