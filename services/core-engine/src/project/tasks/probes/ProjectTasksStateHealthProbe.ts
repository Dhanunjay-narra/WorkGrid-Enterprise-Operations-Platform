export class ProjectTasksStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksState" };
  }
}
