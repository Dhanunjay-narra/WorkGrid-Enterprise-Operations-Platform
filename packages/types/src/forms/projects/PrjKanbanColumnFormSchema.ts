export interface PrjKanbanColumnFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjKanbanColumnFormValidator {
  public static validateForm(form: PrjKanbanColumnFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
