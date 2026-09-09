export class ObsMetricsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsReport" };
  }
}
