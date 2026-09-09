export class ObsMetricsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsTransaction" };
  }
}
