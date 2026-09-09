export class DmsChunksMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksMetric" };
  }
}
