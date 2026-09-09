export interface PrjGanttDependencyFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjGanttDependencyFormValidator {
  public static validateForm(form: PrjGanttDependencyFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
