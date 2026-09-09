export interface BiCohortGroupEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiCohortGroupEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
