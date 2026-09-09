export interface IotSensorCalibrationFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotSensorCalibrationFormValidator {
  public static validateForm(form: IotSensorCalibrationFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
