export interface PrjWorkloadCapacityEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjWorkloadCapacityEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
