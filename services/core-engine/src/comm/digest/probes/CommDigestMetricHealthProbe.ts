export class CommDigestMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestMetric" };
  }
}
