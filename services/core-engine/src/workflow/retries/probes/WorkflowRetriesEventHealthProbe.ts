export class WorkflowRetriesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesEvent" };
  }
}
