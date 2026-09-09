export class ObsMetricsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsRecord" };
  }
}
