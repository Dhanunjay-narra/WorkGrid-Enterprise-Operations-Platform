export interface CrmContactEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmContactEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
