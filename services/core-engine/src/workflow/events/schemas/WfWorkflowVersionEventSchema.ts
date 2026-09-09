export interface WfWorkflowVersionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfWorkflowVersionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
