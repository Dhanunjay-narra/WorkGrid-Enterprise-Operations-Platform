export interface IotFirmwareVersionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotFirmwareVersionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
