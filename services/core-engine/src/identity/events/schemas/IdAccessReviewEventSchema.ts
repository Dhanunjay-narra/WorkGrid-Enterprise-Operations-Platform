export interface IdAccessReviewEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IdAccessReviewEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
