export interface WfWorkflowEdgeEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfWorkflowEdgeEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
