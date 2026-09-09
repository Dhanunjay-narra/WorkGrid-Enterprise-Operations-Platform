export class WorkflowVariablesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesSummary" };
  }
}
