export interface WfApprovalDecisionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfApprovalDecisionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
