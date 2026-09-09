export interface IotTelemetryPacketFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotTelemetryPacketFormValidator {
  public static validateForm(form: IotTelemetryPacketFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
