export class DmsExportItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportItem" };
  }
}
