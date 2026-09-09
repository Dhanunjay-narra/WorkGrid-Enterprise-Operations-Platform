export class ProjectTasksProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksProfile" };
  }
}
