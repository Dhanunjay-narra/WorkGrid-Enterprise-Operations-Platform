export interface IotDeviceCommandEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotDeviceCommandEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
