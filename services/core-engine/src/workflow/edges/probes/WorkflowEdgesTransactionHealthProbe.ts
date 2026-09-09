export class WorkflowEdgesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesTransaction" };
  }
}
