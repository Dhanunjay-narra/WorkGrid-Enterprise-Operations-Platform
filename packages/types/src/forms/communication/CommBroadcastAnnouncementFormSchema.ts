export interface CommBroadcastAnnouncementFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommBroadcastAnnouncementFormValidator {
  public static validateForm(form: CommBroadcastAnnouncementFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
