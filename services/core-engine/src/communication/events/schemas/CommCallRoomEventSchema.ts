export interface CommCallRoomEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommCallRoomEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
