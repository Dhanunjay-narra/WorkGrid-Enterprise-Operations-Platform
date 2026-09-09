export interface IotCommandExecutionLogFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IotCommandExecutionLogFormValidator {
  public static validateForm(form: IotCommandExecutionLogFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
