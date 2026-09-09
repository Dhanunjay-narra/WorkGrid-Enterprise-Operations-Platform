export class ObsMetricsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsSession" };
  }
}
