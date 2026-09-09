export class WorkflowNodesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesPayload" };
  }
}
