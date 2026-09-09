export interface CrmAccountEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmAccountEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
