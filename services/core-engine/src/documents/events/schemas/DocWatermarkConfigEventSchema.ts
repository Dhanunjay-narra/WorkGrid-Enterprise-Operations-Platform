export interface DocWatermarkConfigEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class DocWatermarkConfigEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
