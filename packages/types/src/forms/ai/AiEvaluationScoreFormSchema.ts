export interface AiEvaluationScoreFormData {
  code: string;
  name: string;
  notes?: string;
}

export class AiEvaluationScoreFormValidator {
  public static validateForm(form: AiEvaluationScoreFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
