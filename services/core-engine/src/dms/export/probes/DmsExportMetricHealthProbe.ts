export class DmsExportMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportMetric" };
  }
}
