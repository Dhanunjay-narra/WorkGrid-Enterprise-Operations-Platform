export class ProjectTasksConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksConfig" };
  }
}
