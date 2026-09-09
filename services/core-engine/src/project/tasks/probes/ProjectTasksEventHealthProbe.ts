export class ProjectTasksEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksEvent" };
  }
}
