export class WorkflowDagPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagPolicy" };
  }
}
