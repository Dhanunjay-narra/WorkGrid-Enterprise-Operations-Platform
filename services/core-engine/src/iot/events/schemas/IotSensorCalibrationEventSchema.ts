export interface IotSensorCalibrationEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotSensorCalibrationEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
