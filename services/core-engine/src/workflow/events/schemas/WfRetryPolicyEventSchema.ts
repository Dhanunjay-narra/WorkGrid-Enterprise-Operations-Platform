export interface WfRetryPolicyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfRetryPolicyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
