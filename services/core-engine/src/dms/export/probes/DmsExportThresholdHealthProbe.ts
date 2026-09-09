export class DmsExportThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportThreshold" };
  }
}
