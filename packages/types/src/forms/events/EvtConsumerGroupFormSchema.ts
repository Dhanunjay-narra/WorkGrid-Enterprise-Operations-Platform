export interface EvtConsumerGroupFormData {
  code: string;
  name: string;
  notes?: string;
}

export class EvtConsumerGroupFormValidator {
  public static validateForm(form: EvtConsumerGroupFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
