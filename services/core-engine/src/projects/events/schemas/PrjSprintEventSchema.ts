export interface PrjSprintEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjSprintEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
