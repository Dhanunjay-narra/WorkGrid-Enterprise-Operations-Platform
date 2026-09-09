export class WorkflowDagNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagNode" };
  }
}
