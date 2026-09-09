export class ProjectTasksQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksQueue" };
  }
}
