export interface IntAuthTokenPairEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IntAuthTokenPairEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
