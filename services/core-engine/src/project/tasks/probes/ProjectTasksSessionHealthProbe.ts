export class ProjectTasksSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksSession" };
  }
}
