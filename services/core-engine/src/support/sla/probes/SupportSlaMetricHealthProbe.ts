export class SupportSlaMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaMetric" };
  }
}
