export interface CommChannelFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommChannelFormValidator {
  public static validateForm(form: CommChannelFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
