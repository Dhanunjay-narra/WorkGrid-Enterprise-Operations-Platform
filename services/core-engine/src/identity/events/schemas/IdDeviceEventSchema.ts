export interface IdDeviceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdDeviceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
