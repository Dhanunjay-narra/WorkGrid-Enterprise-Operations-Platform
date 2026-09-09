export class ProjectRisksMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksMetric" };
  }
}
