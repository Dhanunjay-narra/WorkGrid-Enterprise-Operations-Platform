export interface PrjReleasePlanEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjReleasePlanEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
