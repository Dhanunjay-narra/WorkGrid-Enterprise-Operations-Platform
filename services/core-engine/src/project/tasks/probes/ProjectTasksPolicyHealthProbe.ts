export class ProjectTasksPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksPolicy" };
  }
}
