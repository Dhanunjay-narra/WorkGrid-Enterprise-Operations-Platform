export interface CommAttachmentFileFormData {
  code: string;
  name: string;
  notes?: string;
}

export class CommAttachmentFileFormValidator {
  public static validateForm(form: CommAttachmentFileFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
