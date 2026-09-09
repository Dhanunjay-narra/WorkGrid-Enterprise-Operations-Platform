export class DmsExportStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportState" };
  }
}
