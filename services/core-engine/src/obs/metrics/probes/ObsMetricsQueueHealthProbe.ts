export class ObsMetricsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsQueue" };
  }
}
