export class IntSyncMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncMetric" };
  }
}
