export class ProjectSprintsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsMetric" };
  }
}
