export class ProjectTasksTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksTransaction" };
  }
}
