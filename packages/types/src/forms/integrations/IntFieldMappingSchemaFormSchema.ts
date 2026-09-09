export interface IntFieldMappingSchemaFormData {
  code: string;
  name: string;
  notes?: string;
}

export class IntFieldMappingSchemaFormValidator {
  public static validateForm(form: IntFieldMappingSchemaFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
