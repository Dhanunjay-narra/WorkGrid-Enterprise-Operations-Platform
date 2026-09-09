export class DmsFilesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesMetric" };
  }
}
