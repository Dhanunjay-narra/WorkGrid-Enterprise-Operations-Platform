export interface PrjWorkloadCapacityFormData {
  code: string;
  name: string;
  notes?: string;
}

export class PrjWorkloadCapacityFormValidator {
  public static validateForm(form: PrjWorkloadCapacityFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
