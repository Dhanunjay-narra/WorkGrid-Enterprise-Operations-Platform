export interface HrInterviewStageFormData {
  code: string;
  name: string;
  notes?: string;
}

export class HrInterviewStageFormValidator {
  public static validateForm(form: HrInterviewStageFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
