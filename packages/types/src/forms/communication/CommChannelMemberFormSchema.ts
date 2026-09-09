export interface CommChannelMemberFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommChannelMemberFormValidator {
  public static validateForm(form: CommChannelMemberFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
