export interface PrjProjectEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjProjectEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
