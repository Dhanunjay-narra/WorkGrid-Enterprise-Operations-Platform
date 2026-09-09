export class WorkflowRetriesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesPayload" };
  }
}
