export interface CrmTerritoryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmTerritoryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
