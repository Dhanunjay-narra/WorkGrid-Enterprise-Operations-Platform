export interface EvtReplayJobFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtReplayJobFormValidator {
  public static validateForm(form: EvtReplayJobFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
