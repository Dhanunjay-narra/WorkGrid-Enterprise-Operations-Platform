export interface SecDeviceTrustRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SecDeviceTrustRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
