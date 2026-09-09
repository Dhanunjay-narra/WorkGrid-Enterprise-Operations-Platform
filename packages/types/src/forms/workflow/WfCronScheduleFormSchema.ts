export interface WfCronScheduleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class WfCronScheduleFormValidator {
  public static validateForm(form: WfCronScheduleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
