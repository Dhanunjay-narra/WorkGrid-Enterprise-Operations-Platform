export interface CommCallRoomFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommCallRoomFormValidator {
  public static validateForm(form: CommCallRoomFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
