export interface InvSkuItemEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvSkuItemEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
