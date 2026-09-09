export class ProjectTasksThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksThreshold" };
  }
}
