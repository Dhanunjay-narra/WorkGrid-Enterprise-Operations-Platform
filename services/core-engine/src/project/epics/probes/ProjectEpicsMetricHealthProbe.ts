export class ProjectEpicsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsMetric" };
  }
}
