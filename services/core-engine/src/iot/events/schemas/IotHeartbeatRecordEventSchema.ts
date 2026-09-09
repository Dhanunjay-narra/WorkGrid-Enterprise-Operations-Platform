export interface IotHeartbeatRecordEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotHeartbeatRecordEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
