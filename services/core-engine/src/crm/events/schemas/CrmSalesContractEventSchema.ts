export interface CrmSalesContractEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmSalesContractEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
