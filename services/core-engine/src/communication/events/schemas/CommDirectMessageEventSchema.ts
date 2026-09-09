export interface CommDirectMessageEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommDirectMessageEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
