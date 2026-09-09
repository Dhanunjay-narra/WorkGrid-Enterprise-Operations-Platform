export interface IotDeviceFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotDeviceFormValidator {
  public static validateForm(form: IotDeviceFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
