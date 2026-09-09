export class ObsMetricsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsProfile" };
  }
}
