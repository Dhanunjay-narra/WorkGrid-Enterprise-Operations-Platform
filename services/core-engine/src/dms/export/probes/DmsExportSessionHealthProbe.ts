export class DmsExportSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportSession" };
  }
}
