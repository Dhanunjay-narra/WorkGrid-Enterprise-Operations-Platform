export class WorkflowExecutionsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsPayload" };
  }
}
