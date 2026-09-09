export interface EvtStreamSnapshotFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtStreamSnapshotFormValidator {
  public static validateForm(form: EvtStreamSnapshotFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
