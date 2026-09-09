export class DmsExportConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportConfig" };
  }
}
