export interface PrjEpicEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjEpicEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
