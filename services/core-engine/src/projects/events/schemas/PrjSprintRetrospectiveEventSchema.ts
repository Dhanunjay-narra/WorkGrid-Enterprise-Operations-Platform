export interface PrjSprintRetrospectiveEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjSprintRetrospectiveEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
