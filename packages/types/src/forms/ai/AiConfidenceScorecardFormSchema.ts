export interface AiConfidenceScorecardFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiConfidenceScorecardFormValidator {
  public static validateForm(form: AiConfidenceScorecardFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
