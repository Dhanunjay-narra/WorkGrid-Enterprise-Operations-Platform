export class ObsMetricsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsSummary" };
  }
}
