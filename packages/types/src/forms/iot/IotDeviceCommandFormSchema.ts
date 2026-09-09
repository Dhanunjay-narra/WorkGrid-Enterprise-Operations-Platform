export interface IotDeviceCommandFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotDeviceCommandFormValidator {
  public static validateForm(form: IotDeviceCommandFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
