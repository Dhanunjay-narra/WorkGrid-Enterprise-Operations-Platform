export interface EvtEventPartitionFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtEventPartitionFormValidator {
  public static validateForm(form: EvtEventPartitionFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
