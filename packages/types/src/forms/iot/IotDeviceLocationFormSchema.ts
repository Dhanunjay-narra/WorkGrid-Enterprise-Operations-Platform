export interface IotDeviceLocationFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotDeviceLocationFormValidator {
  public static validateForm(form: IotDeviceLocationFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
