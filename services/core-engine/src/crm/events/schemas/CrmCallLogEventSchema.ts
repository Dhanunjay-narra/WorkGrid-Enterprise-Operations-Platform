export interface CrmCallLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmCallLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
