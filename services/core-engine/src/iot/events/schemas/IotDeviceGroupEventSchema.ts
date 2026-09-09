export interface IotDeviceGroupEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotDeviceGroupEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
