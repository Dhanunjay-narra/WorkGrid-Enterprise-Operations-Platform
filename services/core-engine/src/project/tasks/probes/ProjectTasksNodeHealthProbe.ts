export class ProjectTasksNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksNode" };
  }
}
