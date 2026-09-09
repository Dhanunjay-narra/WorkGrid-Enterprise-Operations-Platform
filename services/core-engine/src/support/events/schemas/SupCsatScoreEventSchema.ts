export interface SupCsatScoreEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupCsatScoreEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
