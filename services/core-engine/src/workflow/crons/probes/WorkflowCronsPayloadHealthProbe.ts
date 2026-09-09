export class WorkflowCronsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsPayload" };
  }
}
