export interface CommUserPresenceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommUserPresenceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
