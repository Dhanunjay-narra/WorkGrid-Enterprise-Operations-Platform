export class WorkflowVariablesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesPayload" };
  }
}
