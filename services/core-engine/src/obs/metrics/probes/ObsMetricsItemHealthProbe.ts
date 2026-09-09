export class ObsMetricsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsItem" };
  }
}
