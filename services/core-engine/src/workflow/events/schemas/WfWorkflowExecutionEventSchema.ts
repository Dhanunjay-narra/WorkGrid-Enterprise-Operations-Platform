export interface WfWorkflowExecutionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfWorkflowExecutionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
