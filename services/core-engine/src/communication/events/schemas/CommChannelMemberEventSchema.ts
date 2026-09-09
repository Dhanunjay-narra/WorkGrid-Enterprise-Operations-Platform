export interface CommChannelMemberEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommChannelMemberEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
