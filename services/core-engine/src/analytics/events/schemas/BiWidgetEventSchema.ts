export interface BiWidgetEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiWidgetEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
