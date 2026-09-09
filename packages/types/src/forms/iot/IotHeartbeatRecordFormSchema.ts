export interface IotHeartbeatRecordFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotHeartbeatRecordFormValidator {
  public static validateForm(form: IotHeartbeatRecordFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
