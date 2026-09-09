export interface PrjMilestoneEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjMilestoneEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
