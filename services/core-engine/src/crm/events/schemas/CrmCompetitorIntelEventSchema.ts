export interface CrmCompetitorIntelEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmCompetitorIntelEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
