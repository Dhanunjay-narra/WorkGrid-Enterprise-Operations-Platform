export interface SupCustomerSurveyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupCustomerSurveyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
