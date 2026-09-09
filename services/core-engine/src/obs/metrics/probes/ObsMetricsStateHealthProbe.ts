export class ObsMetricsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsState" };
  }
}
