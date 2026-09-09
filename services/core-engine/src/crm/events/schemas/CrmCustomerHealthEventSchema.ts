export interface CrmCustomerHealthEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmCustomerHealthEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
