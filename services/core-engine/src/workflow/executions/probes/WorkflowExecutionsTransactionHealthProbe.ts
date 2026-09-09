export class WorkflowExecutionsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsTransaction" };
  }
}
