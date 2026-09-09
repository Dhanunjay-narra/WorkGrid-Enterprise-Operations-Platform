export interface CrmActivityEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmActivityEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
