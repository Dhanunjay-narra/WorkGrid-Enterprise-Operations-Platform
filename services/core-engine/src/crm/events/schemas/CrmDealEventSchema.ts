export interface CrmDealEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmDealEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
