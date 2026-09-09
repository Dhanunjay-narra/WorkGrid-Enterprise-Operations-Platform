export interface IdDirectorySyncEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdDirectorySyncEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
