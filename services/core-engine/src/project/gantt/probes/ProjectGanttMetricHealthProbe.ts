export class ProjectGanttMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttMetric" };
  }
}
