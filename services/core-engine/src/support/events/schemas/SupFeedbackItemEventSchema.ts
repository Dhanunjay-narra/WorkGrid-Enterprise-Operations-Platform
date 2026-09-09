export interface SupFeedbackItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupFeedbackItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
