export interface BiTimeSeriesProjectionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiTimeSeriesProjectionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
