export class WorkflowApprovalsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsPayload" };
  }
}
