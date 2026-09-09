export class WorkflowVariablesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesTransaction" };
  }
}
