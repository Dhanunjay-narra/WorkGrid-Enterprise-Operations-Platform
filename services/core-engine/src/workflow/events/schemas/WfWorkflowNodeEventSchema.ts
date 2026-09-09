export interface WfWorkflowNodeEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfWorkflowNodeEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
