export interface IdSessionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdSessionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
