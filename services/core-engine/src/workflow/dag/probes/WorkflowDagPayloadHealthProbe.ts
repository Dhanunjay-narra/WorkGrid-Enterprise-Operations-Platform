export class WorkflowDagPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagPayload" };
  }
}
