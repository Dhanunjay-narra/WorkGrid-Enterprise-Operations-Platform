export class ProjectTasksTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksTask" };
  }
}
