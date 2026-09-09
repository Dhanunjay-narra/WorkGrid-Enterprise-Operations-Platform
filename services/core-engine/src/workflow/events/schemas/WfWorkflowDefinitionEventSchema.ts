export interface WfWorkflowDefinitionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfWorkflowDefinitionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
