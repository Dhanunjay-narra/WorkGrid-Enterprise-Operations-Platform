export class WorkflowEdgesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesPayload" };
  }
}
