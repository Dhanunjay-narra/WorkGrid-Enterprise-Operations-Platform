export class WorkflowCronsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsNode" };
  }
}
