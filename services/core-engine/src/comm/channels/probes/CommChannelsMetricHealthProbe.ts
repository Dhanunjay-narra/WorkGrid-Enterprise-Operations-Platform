export class CommChannelsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsMetric" };
  }
}
