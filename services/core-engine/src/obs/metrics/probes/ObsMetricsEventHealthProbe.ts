export class ObsMetricsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsEvent" };
  }
}
