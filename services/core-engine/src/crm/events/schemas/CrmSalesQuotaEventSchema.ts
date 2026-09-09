export interface CrmSalesQuotaEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmSalesQuotaEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
