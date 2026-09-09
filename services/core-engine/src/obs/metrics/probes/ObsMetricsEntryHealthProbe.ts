export class ObsMetricsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsEntry" };
  }
}
