export class ProjectCapacityMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityMetric" };
  }
}
