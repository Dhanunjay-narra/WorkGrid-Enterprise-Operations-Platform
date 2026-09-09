export interface WfApprovalTaskEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfApprovalTaskEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
