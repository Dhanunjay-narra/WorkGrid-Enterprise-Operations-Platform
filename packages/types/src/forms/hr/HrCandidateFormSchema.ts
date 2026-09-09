export interface HrCandidateFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrCandidateFormValidator {
  public static validateForm(form: HrCandidateFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
