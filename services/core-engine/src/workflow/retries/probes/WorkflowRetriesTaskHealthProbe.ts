export class WorkflowRetriesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesTask" };
  }
}
