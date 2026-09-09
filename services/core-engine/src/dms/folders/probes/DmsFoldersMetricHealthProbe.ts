export class DmsFoldersMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersMetric" };
  }
}
