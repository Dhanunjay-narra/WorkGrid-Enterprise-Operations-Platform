export class ProjectTasksMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksMetric" };
  }
}
