export interface CommNotificationPreferenceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommNotificationPreferenceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
